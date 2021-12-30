const addBtn = document.querySelector("#addBtn");
const inputData = document.querySelector("#input");
const ul = document.querySelector("#ul");

addBtn.onclick = function () {
    if (inputData.value.length > 0) {
        const li = document.createElement("li");//li을 ul 첫번째 노드로 추가
        ul.insertBefore(li,ul.childNodes[0]);
        const input = document.createElement("input");
        input.setAttribute("type", "checkBox");
        li.appendChild(input);//체크박스만들어서 연결
        const span = document.createElement("span");//스팬태그만들기
        li.appendChild(span); //스팬리스트 연결
        span.appendChild(document.createTextNode(inputData.value));//스팬에 텍스트 노드 생성
        span.setAttribute("class", "inputedText"); //스팬에 클래스값 생성
        inputData.value = "";
        input.addEventListener("change", function (event) {
                if (event.target.parentNode.style.textDecorationLine !== "line-through") {
                    event.target.parentNode.style.textDecorationLine = "line-through";
                } else {
                    event.target.parentNode.style = "";
                }
            }//체크박스로
        )
        const button = document.createElement("button");
        button.appendChild(document.createTextNode("삭제"));
        li.appendChild(button);
        button.onclick = function (event) {
            event.target.parentNode.parentNode.removeChild(event.target.parentNode);
        }//삭제버튼 구동부
    } else {
        alert("내용을 입력하세요");
    }
}