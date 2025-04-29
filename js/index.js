$(document).ready(function(){
  
  //메뉴-----------------------------
  $(".main").hover(function(){
    $(this).find(".sub").stop().slideDown();
  },function(){
    $(this).find(".sub").stop().slideUp();
  });

  //메인 이미지 넘어감-----------------
  let fadeContainer = $("main"),
      fadeImage = fadeContainer.find(".img-wrap ul li"),
      fadeIndicator = fadeContainer.find(".main-btn a"),
      oldidx = 0,
      idx=0, 
      fadeCount = fadeImage.length,
      interval = 3000;

      //이미지와 버튼이 바뀌는 함수
  function fadeAni(idx){ 
    if(oldidx != idx){ 
      fadeIndicator.eq(oldidx).removeClass("active"); 
      fadeIndicator.eq(idx).addClass("active"); 
      fadeImage.eq(oldidx).stop().fadeOut("300"); 
      fadeImage.eq(idx).stop().fadeIn("300");
    };
    oldidx = idx; 
  };

      //자동Fade함수
      //일정시간마다 할일: setInterval(함수명,시간) / clearInterval(변수) 
  function fadeAuto(){
    fadeTimer = setInterval(function(){ 
      idx = (oldidx + 1) % fadeCount;
      fadeAni(idx);
    },interval);
  };
  fadeAuto();

      //Indicator(하단버튼)
  fadeIndicator.click(function(){
    idx = $(this).index();
    fadeAni(idx);
  });

      //전체영역에 마우스를 올리면 자동함수 멈추고 다시 마우스가 나오면 자동함수 실행
  fadeContainer.mouseenter(function(){
    clearInterval(fadeTimer);
  })
  .mouseleave(function(){
    fadeAuto();
  });


  // ----- 왼쪽 shop 이미지 페이드 -----
  let leftFadeContainer = $("#shop .left"),
  leftFadeImage = leftFadeContainer.find(".left-img ul li"),
  leftFadeIndicator = leftFadeContainer.find(".l-ind a"),
  leftOldidx = 0,
  leftIdx = 0,
  leftFadeCount = leftFadeImage.length,
  leftInterval = 3000,
  leftFadeTimer;
  
  function leftFadeAni(idx){
  if(leftOldidx != idx){
  leftFadeIndicator.eq(leftOldidx).removeClass("active");
  leftFadeIndicator.eq(idx).addClass("active");
  leftFadeImage.eq(leftOldidx).stop().fadeOut("300");
  leftFadeImage.eq(idx).stop().fadeIn("300");
  };
  leftOldidx = idx;
  };
  
  function leftFadeAuto(){
  leftFadeTimer = setInterval(function(){
  leftIdx = (leftOldidx + 1) % leftFadeCount;
  leftFadeAni(leftIdx);
  }, leftInterval);
  };
  leftFadeAuto();
  
  leftFadeIndicator.click(function(){
  leftIdx = $(this).index();
  leftFadeAni(leftIdx);
  });
  
  leftFadeContainer.mouseenter(function(){
  clearInterval(leftFadeTimer);
  })
  .mouseleave(function(){
  leftFadeAuto();
  });
  
  // ----- 오른쪽 shop 이미지 페이드 -----
  let rightFadeContainer = $("#shop .right"),
  rightFadeImage = rightFadeContainer.find(".right-img ul li"),
  rightFadeIndicator = rightFadeContainer.find(".r-ind a"),
  rightOldidx = 0,
  rightIdx = 0,
  rightFadeCount = rightFadeImage.length,
  rightInterval = 3000,
  rightFadeTimer;
  
  function rightFadeAni(idx){
  if(rightOldidx != idx){
  rightFadeIndicator.eq(rightOldidx).removeClass("active");
  rightFadeIndicator.eq(idx).addClass("active");
  rightFadeImage.eq(rightOldidx).stop().fadeOut("300");
  rightFadeImage.eq(idx).stop().fadeIn("300");
  };
  rightOldidx = idx;
  };
  
  function rightFadeAuto(){
  rightFadeTimer = setInterval(function(){
  rightIdx = (rightOldidx + 1) % rightFadeCount;
  rightFadeAni(rightIdx);
  }, rightInterval);
  };
  rightFadeAuto();
  
  rightFadeIndicator.click(function(){
  rightIdx = $(this).index();
  rightFadeAni(rightIdx);
  });
  
  rightFadeContainer.mouseenter(function(){
  clearInterval(rightFadeTimer);
  })
  .mouseleave(function(){
  rightFadeAuto();
  });
  



  
});