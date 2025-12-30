function bt_click1() {
  // document.getElementById("id1").innerHTML = "바나나";
  $("#id1").html("바나나"); //CSS 셀렉터
  // console.log($("#id1").html()); //출력

  document.getElementById("id1").style.background = "yellow";
  // document.getElementById("id1").style.color = "blue";
  // document.getElementById("id1").style.display = "block";

  
  $("#id3>img").css("display", "block");  
  //image 에 block 속성이 부연된 상황에서 가운데 정렬 방법
  //https://www.codeit.kr/community/threads/9538
  $("#id3>img").css("margin", "0px auto");
  $("#id3>img").attr("src", "https://assets.codepen.io/6023282/banana.jpg");
}

function bt_click2() {
  document.getElementById("id1").innerHTML = "사과";
  document.getElementById("id1").style.background = "orange";

  $("#id1").css("background", "orange"); //스타일 속성적용

  document.getElementById("id1").style.color = "blue";
  document.getElementById("id1").style.display = "block";
  
  $("#id3>img").css("display", "block");
  $("#id3>img").css("text-align", "center");
  $("#id3>img").attr("src", "https://assets.codepen.io/6023282/apple.jpg");
}

function bt_click3() {
  // document.getElementById("id1").style.display = "none";
  
  $("#id3>img").css("display", "none");
}