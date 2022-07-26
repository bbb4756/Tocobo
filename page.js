window.addEventListener('DOMContentLoaded',init)

function init(){
        // 이미지 슬라이드
        let banner_nxt = document.querySelector('.main_nxt_btn >img')
        let banner_pre = document.querySelector('.main_pre_btn > img')
        let img_left = document.querySelector('#ban_img')
        let img_count = document.querySelectorAll('#ban_img > div > img')
        let imgidx = 0
        let page_numElement = document.querySelector('.main_page_num')

        function imgSlide(n){
            img_left.style.left = -n * 33.333 + "%"
        }
        function page_num(n){
            page_numElement.innerText = n+1

        }

        function buttonColor(n){
            if (n == 0){
                banner_pre.classList.add('main_pre_btn_sub')
            } else{
                banner_pre.classList.remove('main_pre_btn_sub')
            }
            if (n == 2){
                banner_nxt.classList.add('main_nxt_btn_sub')
            } else{
                banner_nxt.classList.remove('main_nxt_btn_sub')
            }
        }
    
        banner_nxt.addEventListener("click", function(){
            if(imgidx < img_count.length-1){
                console.log(imgidx)
                imgSlide(imgidx + 1)
                imgidx += 1;
            }
            page_num(imgidx)
            buttonColor(imgidx)
        })

        banner_pre.addEventListener('click', function(){
            if(imgidx > 0){
                imgSlide(imgidx - 1)
                imgidx -= 1;
            }
            page_num(imgidx)
            buttonColor(imgidx)
        })

    
        // 제품 슬라이드 화살표
        let nxt = document.querySelector('#next_button')
        let prev = document.querySelector('#prev_button')
        let slides = document.querySelector('#cosmetics_list > ul')
        let slidecount = document.querySelectorAll('#cosmetics_list > ul > li')
        let currentidx = -1
        let currentleft = document.defaultView.getComputedStyle(slides).getPropertyValue("left").replace('px','') *1
        //현재 left 값

        let sliderElement = document.querySelectorAll('#slider > span')
        console.log(sliderElement)
        function moveSlide(num){
            slides.style.left = - num * (370) + 'px';
            currentidx = num;
            currentleft = document.defaultView.getComputedStyle(slides).getPropertyValue("left").replace('px','') *1
            console.log(currentleft)
        }
    
        function moveSlide(num){
            slides.style.left = -num * 370 + 'px'
        }

        function Slider(page){
            if (page == -1){
                sliderElement[1].style.backgroundColor = "#fff"
                sliderElement[2].style.backgroundColor = "#fff"
            }
            if (page == 0){
                sliderElement[1].style.backgroundColor = '#009BDE'
                sliderElement[2].style.backgroundColor = '#fff'
            }
            if (page == 1){
                sliderElement[1].style.backgroundColor = '#009BDE'
                sliderElement[2].style.backgroundColor = '#009BDE'
            }
        }
    
        function slide_opacity(n){
            if(n == 1 ){
                nxt.style.opacity = 0.5
            }else{nxt.style.opacity = 0.8}
            if(n==-1){
                prev.style.opacity = 0.5
            }else{
                prev.style.opacity = 0.8
            }
        }

        nxt.addEventListener('click', function(){

            if(currentidx < slidecount.length-4){
                moveSlide(currentidx+1);
                console.log(currentidx)
                Slider(currentidx+1)
                currentidx += 1

                slide_opacity(currentidx)
                
                
            }
            
        });
    
        prev.addEventListener('click', function(){
            if(currentidx > -(slidecount.length-4)){
                moveSlide(currentidx - 1);
                console.log(currentidx)
                Slider(currentidx -1)
                currentidx -= 1
                slide_opacity(currentidx)
                
            }
    
        })
        // 제품 슬라이드 화살표

        //번역 마우스 오버/ 마우스 아웃

        let translate_icon = document.querySelector('#trans_list')
        let translate = document.querySelector('#img_menu_wrap > li > ul')

        translate_icon.addEventListener("mouseover", ()=>{
            translate.setAttribute('class', 'on')
        })

        //마우스 아웃
        let translate_ul = document.querySelector('#trans_list')
        translate_ul.addEventListener('mouseout', ()=>{
            translate.setAttribute('class', '')
        })
        //리뷰 슬라이드
        let review = document.querySelector('#review') // 움직일 애
        let review_pre = document.querySelector('.review_pre > img')//버튼
        let review_nxt = document.querySelector('.review_nxt > img')//버튼
        let review_list = document.querySelectorAll('#review > li') //리스트
        let review_num = review_list.length
        let review_idx = 0
        // let reviewwWidth = 1000
        let reviewleft = -25
        // console.log(reviewleft)
        // console.log(review_num)
        let opacity_index = 0

        // makeClone();

      

        // function makeClone(){
        //     for(let i=0; i<review_num; i++){
        //         let cloneReview = review_list[i].cloneNode(true);
        //         cloneReview.classList.add('clone');
        //         review.appendChild(cloneReview);
        //     }
        //     for(let i = review_num - 1; i>=0; i--){
        //         let cloneReview = review_list[i].cloneNode(true);
        //         cloneReview.classList.add('clone');
        //         review.prepend(cloneReview);
        //     }
            
        //     updateWidth();
        //     setInitalPos();
        // }

        // function updateWidth(){
        //     let reviewSlide =document.querySelectorAll('#review > li') 
        //     let newSlidecnt = reviewSlide.length;

        //     let newWidth = (reviewwWidth) * newSlidecnt + 'px';
        //     review.style.width = newWidth;
        // }

        // function setInitalPos(){
        //     let initalTranslateValue = -(reviewwWidth) * review_num;
        //     review.style.transform = 'translateX(' + initalTranslateValue + 'px)'
        // }
        //리뷰슬라이드
        function ReviewSlide(i){
            console.log(i)
            review.style.left = reviewleft + (-i * 50) + '%'

            for(let r = 0; r<6; r++ ){
                review_list[r].classList.remove('review_on')
            }

            review_list[i+1].setAttribute('class', 'review_on')
        }


        review_nxt.addEventListener('click', function(){
            review_idx += 1
            if (review_idx == 4){
                review_idx = 0
            }
            console.log(review_idx)
            ReviewSlide(review_idx)
        })
      
        review_pre.addEventListener('click', ()=>{
            review_idx -= 1
            if(review_idx == -1){
                review_idx = 3
            }
            console.log(review_idx)
            ReviewSlide(review_idx)
        })

        //스크롤 맨 위로 올리기

        let scroll_top = document.querySelector('.quick_icon1')

        scroll_top.addEventListener('click', ()=>{
            document.documentElement.scrollTop = 0;
        })

        //퀵메뉴 사라지게 하기
        let right_quick = document.querySelector('#right_quick')

        let trans_box = document.querySelector('#Transparency')
        window.addEventListener('scroll', function(){
            console.log(window.scrollY)
            let currentscroll = window.scrollY

            if (currentscroll!=0){

                right_quick.classList.add('block')//스크롤을 내렸다면 생성
                trans_box.classList.add('trans')
    
            }else{
                right_quick.classList.remove('block')
                trans_box.classList.remove('trans')
            }

            //눈에보이면 생성

            if(currentscroll>2200){
                review.classList.add('float')
            } else{
                review.classList.remove('float')
            }

            
        });

        // let insta = document.querySelectorAll('#insta_content > div')
        // let insta_after = document.querySelector('#insta_content > div::after')
        // let insta_like = document.querySelector('#insta_content>div>div')
        // let insta_margin = document.querySelector('#insta_content>div>div>img:nth-child(1)')
        


        // insta.addEventListener('mouseover' , ()=>{
        //     insta_after.style.display = 'block'
        //     insta_like.style.display = 'block'
        //     insta_margin.style.display = 'block'
        // })



    }

