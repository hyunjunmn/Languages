#tuple ,list 랑 같지만 변경할 수 없음
#days = ("Mon","Tue","Wed","Thr","Fri")
#print(type(days)) #type을 알아보기위한 출력방식

#dictionary 만들기
#key와 value로 이루어짐
nico={
    "name":"nico",
    "age":29,
    "korean":True,
    "fav_food":["Beef","Chicken"]
}

#print와 같은 python안에서 built-in된 함수들 알아보기

print(nico)
nico["awesome"] = True #dictionary 안에서 정보를 추가할 때
print(nico)
print(nico["name"]) #dictionary 안에서 특정 정보를 불러올 때 
print(len("asdfasfasdfasdfasf")) #길이 확인법

#type 변환
num = "13"
print(type(num))
i_num = int(num)
print(type(i_num))
