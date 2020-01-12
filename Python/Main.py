#Python의 변수 형태들

#a_string='like this' /string형 
#a_num=3  /int형
#a_float = 3.14 /float형
#a_boolean=True /boolean형
#a_none = None #존재하지 않는다 '참','거짓' 이 아닌 그냥 없는거
#변수명을 길게할때 a_number_overten
#print(a_string,a_num,a_boolean) 

#list활용법
days=["Mon","Tue","Wed","Thr","Fri"]
#print("Mon" in days) list안의 값들이 true인지 false인지 확인하는법
#print(len(days)) list안의 값들의 길이 확인법


#mutable sequence활용법
days.append("Sat") #sat가 추가됨
days.reverse() #안에 들어있는 값들이 반대로 출력하게됨
print(days)


