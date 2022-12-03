
# Implementación de NAT
- Siempre recalcular el checksum y setearlo al paquete como último paso antes de finalizar el procesamiento
- La tabla debe mantener IP_priv, PORT_priv, IP_publ, PORT_publ

# Implementación de Forwarding
- Chequear TTL y decrementarlo. Si TTL no es mayor a 1, se debe enviar el mensaje ICMP con TTL Expire.
- Longest Prefix Match obviamente
- Detectar multicast sabiendo que una dir. de multicast siempre comienza con 1110

# TCP
- C