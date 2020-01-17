print("계산기를 시작합니다.")

select = int(input("하고 싶은 계산을 입력해주세요 \n 1.plus 2.minus 3.times 4.divide"))

a = int(input("첫번째 숫자를 넣어주세요"))
b = int(input("두번째 숫자를 넣어주세요"))    

def plus(a,b):
    return a+b
def minus(a,b):
    return a-b
def times(a,b):
    return a*b
def divide(a,b):
    return a/b

if select==1:
    print(plus(a,b))
elif select==2:
    print(minus(a,b))
elif select==3:
    print(times(a,b))
else:
    print(divide(a,b))