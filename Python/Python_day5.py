#import math #import 하는법
#from math import ceil,fsum,fabs #부분 import
#전체 모듈을 import할때는 import사용 그러나 부분적으로 import하고싶을때는 from사용 (이름을 변경하고 싶을때는 as사용)
#import ex_import
from ex_import import plus as homeplus
from math import fsum as awesum # 부분import에서 원하는 함수명으로 이름을 변경할 때
#조건문 활용 & 모듈 &import 활용
#days=("Mon","Tue","Wed","Thr","Fri")

#for x in days:
 #   if x is "Wed":
  #      break
   # else:
    #    print(x)

#for letter in "Jun": #string 형도 기본적으로는 배열형태로 되어있음
 #       print(letter)


#print(math.ceil(1.2)) #올림
#print(math.fabs(-1.2)) #절대값으로 반환
#print(fsum([1,2,3,4,5,6,7])) # 부분import했을때 사용법
#print(ceil(1.2)) #부분 import 했을때 사용법
print(awesum([1,2,3,4,5,6,7]))
print(homeplus(1,2))