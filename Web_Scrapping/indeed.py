import requests #request를 import 함
from bs4 import BeautifulSoup#beautifulsoup 

LIMIT = 50
URL = f"https://kr.indeed.com/jobs?q=python&limit={LIMIT}"

def extract_indeed_pages():
    result = requests.get(URL) #request.get을 이용하여서 url불러오기
    soup = BeautifulSoup(result.text,"html.parser") #어떠한 특정 데이터를 찾아주는 object
    pagination = soup.find("div", {"class":"pagination"})
    links = pagination.find_all('a')

    pages = []

    for link in links[:-1]:
        pages.append(int(link.find("span").string))#모든 span을 찾아서 pages에 넣어 줌 #지금같은 상황에서는 string형태를 integer형태로 변환해준 것
        #pages.append(link.string)도 사용가능 /** beautifulsoup에서 알아서 인식해준다.
        #pages = pages[0:-1] #모든 pages를 가져오되 마지막 -1을 빼고 출력한다.  spans[x:x] :x부터 x까지 출력한다.

    max_page = pages[-1]
    return max_page

    #print(range(max_page)) #range함수 여기에 들어가있는 숫자만큼 배열의 크기가 만들어짐 지금같은경우는 0~10까지만들어짐

  

def extract_indeed_jobs(last_page):
    jobs=[]
    for page in range(last_page):
        result =requests.get(f"{URL}&start={page*LIMIT}")
        print(result.status_code)
    return jobs