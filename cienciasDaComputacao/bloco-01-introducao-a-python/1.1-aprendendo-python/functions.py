def maior(n1, n2):
    if n1 > n2:
        return n1
    else:
        return n2

print(maior(8, 5))

def media(lista):
    return sum(lista) / len(lista)

print(media([10, 5, 2, 3]))

def imprimir_quadrado(n):
    for i in range(1, n + 1):
        print(n * '*')

imprimir_quadrado(5)