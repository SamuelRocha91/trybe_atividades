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

def mais_caracteres(lista):
    count = 0
    maior = ''
    for i in lista:
        if len(i) > count:
            count = len(i)
            maior = i
    return maior

print(mais_caracteres(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]))

import math

def custo_tinta(metros):
    latas = math.ceil((metros / 3) / 16)
    preco = latas * 80
    custo_m2 = (latas, preco)
    return custo_m2

print(custo_tinta(49))

def tipo_de_triangulo(n1, n2, n3):
    if n1 == n2 and n2 == n3:
        print("Triângulo equilátero")
    elif n1 == n2 or n1 == n3 or n2 == n3:
        print("Triângulo isósceles")
    else:
        print("Triângulo escaleno")


tipo_de_triangulo(3, 5, 3)

def menor_elemento(lista):
    menor = lista[0]
    for i in lista:
        if i < menor:
            menor = i
    return menor

print(menor_elemento([5, 9, 3, 19, 70, 8, 100, 2, 35, 27]))

def triangulo_de_asteriscos(n):
    if n <= 1:
        print("O número deve ser maior que 1")
    for num in range(1, n + 1):
        print(num * "*")

triangulo_de_asteriscos(5)

def soma_num_int(n):
    return sum(range(1, n + 1))

print(soma_num_int(5))

