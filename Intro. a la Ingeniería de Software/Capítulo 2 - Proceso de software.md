Un proceso de software es un conjunto de actividades relacionadas que lleva a la producción de un sistema de software. Las cuatro etapas son complejas e incluyen subactividades, y el propio proceso puede tener otras actividades.

## Plan-driven y ágiles

En ocasiones, los procesos de software se clasifican como dirigidos por un plan (plan-driven) o como procesos ágiles. 
**Los procesos dirigidos por un plan** son aquellos donde todas las actividades del proceso se planean por anticipado y el avance se mide contra dicho plan. 
En **los procesos ágiles**, la planeación es incremental y es más fácil modificar el proceso para reflejar los requerimientos cambiantes del cliente. 

Por lo general, uno necesita encontrar un equilibrio entre procesos dirigidos por un plan y procesos ágiles.
Aunque no hay un proceso de software “ideal”, en muchas organizaciones sí existe un ámbito para mejorar el proceso de software.

# Modelos de proceso de software

## Descripciones del proceso

Cuando se describe un proceso, generalmente hablamos de las actividades de dicho proceso (“especificar el modelo de datos”, “diseñar la interfaz de usuario”) y el orden en el cual se deberían realizar.
Las descripciones de los procesos **también deben incluir**:
1. **Productos**, que son los resultados de una actividad del proceso.
2. **Roles**, que reflejan las responsabilidades de la gente que interviene en el proceso.
3. **Precondiciones y postcondiciones**, que son declaraciones válidas antes y después de que se realice una actividad del proceso o se cree un producto.

## Algunos modelos

[[Ejemplos de modelos o SDLC]]

Dichos modelos **no son mutuamente excluyentes** y con frecuencia se usan en conjunto, sobre todo para el desarrollo de grandes sistemas. Para este tipo de sistemas, tiene sentido combinar algunas de las mejores características de los modelos de desarrollo en cascada e incremental. Se necesita contar con información sobre los requerimientos esenciales del sistema para diseñar la arquitectura de software que apoye dichos requerimientos. No puede desarrollarse de manera incremental. 
**Los subsistemas dentro de un sistema más grande se desarrollan usando diferentes enfoques.** Partes del sistema que son bien comprendidas pueden especificarse y desarrollarse al utilizar un proceso basado en cascada. Partes del sistema que por adelantado son difíciles de especificar, como la interfaz de usuario, siempre deben desarrollarse con un enfoque incremental.

# Actividades del proceso de software

Existen muchos diferentes procesos de software, pero todos deben incluir cuatro actividades que son fundamentales para la ingeniería de software.

## 1. Especificación del software

Tienen que definirse tanto la **funcionalidad** del software como las **restricciones** de su operación. Por lo general, los requerimientos se presentan en dos niveles de detalle. Los usuarios finales y clientes necesitan un informe de requerimientos de alto nivel; los desarrolladores de sistemas precisan una descripción más detallada del sistema.

Existen cuatro actividades principales en el proceso de ingeniería de requerimientos:
- **Estudio de factibilidad**
- **Obtención y análisis de requerimientos
- **Especificación de requerimientos
- **Validación de requerimientos**

## 2. Diseño e implementación del software

Debe desarrollarse el software para cumplir con las especificaciones. La etapa de implementación de desarrollo del software corresponde al proceso de convertir una especificación del sistema en un sistema ejecutable. Siempre incluye procesos de diseño y programación de software, aunque también puede involucrar la corrección en la especificación del software.
Un diseño de software se entiende como una descripción de la estructura del software que se va a implementar, los modelos y las estructuras de datos utilizados por el sistema, las interfaces entre componentes del sistema y, en ocasiones, los algoritmos usados.

Las actividades en el proceso de diseño varían dependiendo del tipo de sistema a desarrollar:
- **Diseño arquitectónico**, aquí se identifica la estructura global del sistema, los principales componentes (llamados en ocasiones subsistemas o módulos), sus relaciones y cómo se distribuyen.
- **Diseño de interfaz**, en éste se definen las interfaces entre los componentes de sistemas. Esta especificación de interfaz no tiene que presentar ambigüedades. Con una interfaz precisa, es factible usar un componente sin que otros tengan que saber cómo se implementó. Una vez que se acuerdan las especificaciones de interfaz, los componentes se diseñan y se desarrollan de manera concurrente.
- **Diseño de componentes**, en él se toma cada componente del sistema y se diseña cómo funcionará. Esto puede ser un simple dato de la funcionalidad que se espera implementar, y al programador se le deja el diseño específico. Como alternativa, habría una lista de cambios a realizar sobre un componente que se reutiliza o sobre un modelo de diseño detallado. El modelo de diseño sirve para generar en automático una implementación.
- **Diseño de base de datos**, donde se diseñan las estructuras del sistema de datos y cómo se representarán en una base de datos. De nuevo, el trabajo aquí depende de si una base de datos se reutilizará o se creará una nueva.

## 3. Validación del software

Por lo general, los programadores realizan algunas pruebas del código que desarrollaron. Esto revela con frecuencia defectos del programa que deben eliminarse del programa. A esta actividad se le llama depuración (debugging). La prueba de defectos y la depuración son procesos diferentes. La primera establece la existencia de defectos, en tanto que la segunda se dedica a localizar y corregir dichos defectos.

Se crea para mostrar que un sistema cumple tanto con sus especificaciones como con las expectativas del cliente. Las pruebas del programa, donde el sistema se ejecuta a través de datos de prueba simulados, son la principal técnica de validación. Esta última también puede incluir procesos de comprobación, como inspecciones y revisiones en cada etapa del proceso de software.

- Prueba de desarrollo 
	Las personas que desarrollan el sistema ponen a prueba los componentes que constituyen el sistema. Cada componente se prueba de manera independiente, es decir, sin otros componentes del sistema. Éstos pueden ser simples entidades, como funciones o clases de objeto, o agrupamientos coherentes de dichas entidades. Por lo general, se usan herramientas de automatización de pruebas
- Pruebas del sistema
	Los componentes del sistema se integran para crear un sistema completo. Este proceso tiene la finalidad de descubrir errores que resulten de interacciones no anticipadas entre componentes y problemas de interfaz de componente, así como de mostrar que el sistema cubre sus requerimientos funcionales y no funcionales, y poner a prueba las propiedades emergentes del sistema.
- Pruebas de aceptación 
	Ésta es la etapa final en el proceso de pruebas, antes de que el sistema se acepte para uso operacional. El sistema se pone a prueba con datos suministrados por el cliente del sistema, en vez de datos de prueba simulados.

En desarrollo incremental, cada incremento se prueba según sus requerimientos. En desarrollo dirigido por pruebas, las mismas se desarrollan junto con los requerimientos antes de empezar. En desarrollo por plan, se hacen planes de prueba (el modelo en V). El beta testing consiste en enviar el software a posibles clientes para que reporten problemas.


## 4. Evolución del software

El software tiene que evolucionar para satisfacer las necesidades cambiantes del cliente. La distinción entre desarrollo y mantenimiento es cada vez más irrelevante. Es muy difícil que cualquier sistema de software sea un sistema completamente nuevo, y tiene mucho más sentido ver el desarrollo y el mantenimiento como un continuo. En lugar de dos procesos separados, es más realista pensar en la ingeniería de software como un proceso evolutivo (figura 2.8), donde el software cambia continuamente a lo largo de su vida, en función de los requerimientos y las necesidades cambiantes del cliente.

# Cómo enfrentar el cambio

Cualquiera que sea el modelo del proceso de software utilizado, es esencial que ajuste los cambios al software a desarrollar. El cambio se agrega a los costos del desarrollo de software debido a que, por lo general, significa que el trabajo ya terminado debe volver a realizarse. A esto se le llama **rehacer**.

Existen dos enfoques relacionados que se usan para reducir los costos del rehacer:
1. **Anticipar el cambio**, donde el proceso de software incluye actividades que anticipan cambios posibles antes de requerirse la labor significativa de rehacer.
2. **Tolerancia al cambio**, donde el proceso se diseña de modo que los cambios se ajusten con un costo relativamente bajo.

## Dos formas de enfrentar el cambio:

**Un prototipo** se debe desarrollar de forma rápida e iterativa para que los costos sean controlados y se pueda experimentar con él de forma temprana. Los prototipos les permiten a los potenciales usuarios ver si el sistema les sirve, e incluso puede revelar nuevos requerimientos o errores.

![[Pasted image 20230306193900.png]]

Los prototipos permiten verificar si un requerimiento es realizable. El objetivo de un prototipo se debe definir desde el principio: desarrollar la interfaz de usuario, un sistema para validar requerimientos, o mostrar la aplicación. Suelen no ser compatibles. Finalmente, para evaluar un prototipo, hay que entrenar al usuario, que no está acostumbrado, y puede no dar resultados correctos.

**Las entregas incrementales** funcionan con las características del desarrollo incremental. Cada incremento es probado por el cliente, por lo que pueden experimentar para agregar nuevos requerimientos. Como las partes más importantes son las que reciben más testing, por ser hechas primero, tendrán menos errores. Es difícil de implementar cuando se está reemplazando un sistema existente, pues los usuarios están acostumbrados a tener todas las funcionalidades. No es aplicable para los mismos casos que el modelo en cascada sí lo es; en estos casos, son mejores los prototipos.

![[Pasted image 20230421185631.png]]

# Mejora de procesos

El enfoque de madurez de procesos busca mejorar la calidad del producto y que el proceso sea predecible. Por otro lado, el enfoque ágil sostiene que los mejores procesos son los que tienen menores costos generales. El primero se basa en desarrollo dirigido por planes y tiene mayores costos, mientras que el segundo disminuye la formalidad y documentación, enfocándose en el código.

El análisis de procesos se puede hacer con características como velocidad y robustez. En el primer ciclo de cambios hay que recoger información del proceso para poder mejorar. Es una actividad a largo plazo y continua, dados los cambios del mercado. La madurez de los procesos refleja la administración y medidas de los mismos, así como el uso de buenas prácticas de ingeniería de software por parte de la compañía.

En el nivel inicial del modelo de madurez de procesos, los objetivos del área están satisfechos. En el nivel gestionado, además debe haber documentación de los objetivos, y monitorear los procesos. En el nivel definido, se estandarizan los procesos, y se obtienen medidas para el futuro. En el nivel gestionado cuantitativamente, se usan medidas cuantitativas para controlar subprocesos. En el nivel de optimización, se usan las medidas obtenidas para mejorar los procesos.

Las dificultades de aplicar este modelo por sus costos en modelos ágiles resultan en que sólo compañías grandes lo usan.