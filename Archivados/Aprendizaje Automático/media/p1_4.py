from random import randrange

atributos_posibles_valores = {
    "Dedicación": ["alta", "media", "baja"],
    "Dificultad": ["alta", "media", "baja"],
    "Horario": ["matutino", "nocturno"],
    "Humedad": ["alta", "media", "baja"],
    "HumorDoc": ["bueno", "malo"],
}


def match(h_i, x_i):
    return h_i != "0" and (h_i == x_i or h_i == "?")


def eval_h(h, x):
    return all(match(h_i, x_i) for h_i, x_i in zip(h, x))


def expr_mas_general(h_i, x_i):
    if h_i == "0":
        return x_i
    else:
        return "?"


def generalizar_h(h, x):
    return tuple(
        h_i if match(h_i, x_i) else expr_mas_general(h_i, x_i) for h_i, x_i in zip(h, x)
    )


def find_s(train):
    h = tuple("0" for _ in atributos_posibles_valores)

    for x, c_x in train:
        if c_x and not eval_h(h, x):
            h = generalizar_h(h, x)

    return h


def test_ejemplo_curso():
    train = [
        (("alta", "alta", "nocturno", "media", "bueno"), True),
        (("baja", "media", "matutino", "alta", "malo"), False),
        (("media", "alta", "nocturno", "media", "malo"), True),
        (("media", "alta", "nocturno", "alta", "bueno"), False),
    ]

    print(find_s(train))


test_ejemplo_curso()


def test_cant_ejemplos():
    concepto = ("?", "media", "?", "?", "?")

    def ejemplo_verdad():
        instancia = tuple(
            posibles_valores[randrange(0, len(posibles_valores))]
            for atributo, posibles_valores in atributos_posibles_valores.items()
        )

        clasif = eval_h(concepto, instancia)
        return instancia, clasif

    def corrida():
        conj_ejemplos = set()
        cant_ejemplos_positivos = 0
        for cant_ejemplos in range(1000):
            while True:
                nuevo = ejemplo_verdad()
                if nuevo not in conj_ejemplos:
                    if nuevo[1]:
                        cant_ejemplos_positivos += 1
                    break

            conj_ejemplos.add(nuevo)
            h_aprendido = find_s(conj_ejemplos)
            if h_aprendido == concepto:
                return cant_ejemplos, cant_ejemplos_positivos

    cant_ejemplos_necesarios = []
    cant_ejemplos_positivos_necesarios = []
    for _ in range(100_000):
        a, b = corrida()
        cant_ejemplos_necesarios.append(a)
        cant_ejemplos_positivos_necesarios.append(b)
    print(
        "promedio cant_ejemplos_necesarios:",
        sum(cant_ejemplos_necesarios) / len(cant_ejemplos_necesarios),
    )
    print(
        "promedio cant_ejemplos_positivos_necesarios:",
        sum(cant_ejemplos_positivos_necesarios)
        / len(cant_ejemplos_positivos_necesarios),
    )


test_cant_ejemplos()
