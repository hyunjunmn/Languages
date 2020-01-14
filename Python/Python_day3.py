#python 함수 만드는법
#python에서는 괄호를 넣는것이 아닌 들여쓰기로 함수안에서 들여쓰기에 의해서 body안으로 들어가진다
#def say_hello(who):
 #   print("hello",who) #say_hello 함수안에 포함되어있음

#print("bye") #say_hello안에 포함되지않음

#say_hello("Jun")

#def plus(a,b):
 #   print(a+b)


#def minus(a,b=0): #b에 default value 넣는법
 #   print(a-b)


#plus(1,2)
#minus(2)

#def say_hello(name="noname"):
 #   print("hello",name)

#say_hello()
#say_hello("HYUN")



#RETURN 사용법

#def p_plus(a,b):
#    print(a+b)
def r_plus(a,b):
        print("helllllllllo")
        return(a+b)
        print("helllllllllo")

#p_result = p_plus(2,3)#p_plus함수내에서 return하는 값이없음(출력만 하기때문)
r_result = r_plus(2,3)

print(r_result)