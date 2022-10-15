## Transferencia de archivos

![[Pasted image 20221005143325.png|400]]

Protocolo de transferencia de archivos que se ejecuta sobre **TCP**. Utiliza **dos** conexiones TCP paralelas para transferir un archivo, una **conexión de control** y una **conexión de datos**, por lo cual se dice que envía su información de control **fuera de banda**. La conexión de control permanece abierta mientras que dure la sesión de usuario, pero se crea una nueva conexión de datos **para cada archivo** transferido dentro de la sesión (es decir, las conexiones de datos no son persistentes). El servidor FTP tiene que mantener un **estado** del usuario.

![[Pasted image 20221005143402.png|400]]

## Comandos y respuestas de FTP
Se envían a través de la conexión de control de formato ASCII de 7 bits.

### Comandos:
- **USER**  **_nombre_de_usuario_**: se utiliza para enviar la identificación del usuario al servidor.
- **PASS**  **_contraseña_**: se utiliza para enviar la contraseña del usuario al servidor.
- **LIST**: se utiliza para pedir al servidor que devuelva una lista de todos los archivos existentes en el directorio remoto actual. La lista de archivos se envía a través de una conexión de datos (nueva y no persistente), en lugar de a través de la conexión de control TCP.
- **RETR**  **_nombre_de_archivo_**: se utiliza para recuperar (es decir, extraer) un archivo del directorio actual del host remoto. Este comando hace que el host remoto inicie una conexión de datos y envíe el archivo solicitado a través de la conexión de datos.
- **STOR**  **_nombre_de_archivo_**: se utiliza para almacenar (es decir, introducir) un archivo en el directorio actual del host remoto.

### Respuestas:
- **331** Username OK, password required
- **125** Data connection already open; transfer starting
- **425** Can’t open data connection
- **452** Error writing file