# Correo Electrónico

## SMTP

Puerto 25, ejecuta sobre TCP para transmitir un correo desde el servidor de correos del emisor al servidor de correo del destinatario. Dos lados, el lado del cliente y del servidor.
Funcionalidades arcaicas como la restricción del cuerpo de los mensajes a formato ASCII de 7 bits. Normalmente SMTP no utiliza servidores de correo intermedios para enviar correos. Si el servidor destinatario no está disponible, el del remitente conservará el mensaje y lo intentará de nuevo.
**Comandos:** 
- HELO,
- MAIL FROM,
- RCPT TO,
- DATA y 
- QUIT.

SMTP utiliza conexiones persistentes: si el servidor de correo emisor tiene varios mensajes
que enviar al mismo servidor de correo receptor, puede enviar todos los mensajes a través
de la misma conexión TCP.

![[Pasted image 20221005143636.png|500]]

### Similitudes con HTTP
- Ambos se emplean para transferir archivos de un host a otro
- Para transferir los archivos, ambos emplean conexiones persistentes

### Diferencias con HTTP
- HTTP es principalmente un protocolo pull y SMTP un protocolo push
- SMTP requiere que cada mensaje, incluyendo el cuerpo de cada mensaje, esté en el formato ASCII de 7 bits. Los datos HTTP no imponen esa restricción.
- Ante un documento con imágenes, HTTP encapsula cada objeto en su propio mensaje de respuesta HTTP, mientras que SMTP incluye todos los objetos del mensaje en un mismo mensaje.

## POP

Puerto 110, protocolo especial de acceso al correo que permite transferir los mensajes del servidor de correo a una PC local.

### Pasos:
- **Autorización:** el agente de usuario envía un nombre de usuario y una contraseña para autenticar al usuario.
- **Transacción:** el agente usuario recupera los mensajes
- **Actualización:** tiene lugar luego del comando QUIT, terminando la sesión SMTP 

#### **Respuestas:**
- `+OK`: el comando era correcto.
- `-ERR`: error en el comando.

#### **Autorización:**
- `user {nombre de usuario}`
- `pass {contraseña}`

![[Pasted image 20221005144152.png|300]]

#### **Transacción:** 
Un agente que utilice POP3 suele ser configurado (por el usuario) para “descargar y borrar” (list, retr y dele) o para “descargar y guardar”.

Durante una sesión POP3, el servidor POP3 mantiene cierta información de **estado** (relación de los mensajes de usuario que han sido marcados para ser borrados), pero no conserva la información de **estado** de una sesión POP3 a otra.
POP3 no proporciona ningún medio al usuario para crear carpetas remotas y asignar mensajes a las mismas.

![[Pasted image 20221005144252.png|300]]



## IMAP

Tiene más funcionalidades que POP3, por lo que aumenta considerablemente su complejidad, haciendo que la implementación tanto del lado del cliente como del servidor sean significativamente más complejas. Los mensajes en IMAP se mantienen en un único lugar, el servidor, el cual asocia cada mensaje a una carpeta, proveyendo a los usuarios con comandos que permiten crear carpetas y mover mensajes entre ellas. A diferencia de POP3, IMAP mantiene el estado de los usuarios durante las sesiones, ya sea nombre de las carpetas o mapeados entre ids de mensajes y nombres de carpetas. A su vez, IMAP permite a los user agent acceder componentes de los mensajes, por ejemplo, obtener solo el header