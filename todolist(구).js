let itemList = []; //리스트 변수 선언

const addBtn = document.querySelector("#addBtn");//변수에 버튼 연결

addBtn.onclick = addList; //등록 버튼 클릭시 함수 실행

function addList(){
    const todoName = document.querySelector("#todoName"); //todoName 변수에 텍스트 박스 값 연결
    if (todoName.value){
        itemList.unshift(todoName.value); //값이 트룰리하다면 리스트 배열 첫칸에 내용 추가
        document.querySelector("#todoName").value = ""; //내용 없애기
        showList(); //리스트 보여주는 함수 실행
    }
}

function showList () {
  let listBody = "<ul>"; //리스트 바디 리스트 열기
  for (let i = 0;i<list.length;i++){
      listBody = listBody+"<li>"+"<input type='checkbox' class='checkStatus' id="+i+">"+"<span class='checkConf'>"+list[i]+"</span>"+"<button class='close' id="+i+">"+"삭제"+"</button>"+"</li>";
  }//리스트 내용 만들기
  listBody = listBody+"</ul>";//리스트 닫기


  document.querySelector("#showListBody").innerHTML = listBody; //선언해놓은 구역에 내용 넣기

    const remove = document.querySelectorAll(".close");//제거할 내용들 배열로 만들기
  for (let i=0; i<remove.length; i++){
      remove[i].onclick = removeList;//제거할 내용들
  }

}

function removeList(){
    const removeId = this.getAttribute("id");//삭제 리스트 인덱스값 가져오기
    list.splice(removeId,1);//해당 인덱스값 배열에서 자르기
    showList();//삭제된 리스트 다시 보여주기
}
