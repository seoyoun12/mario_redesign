
$(function(){

    let mouseoverState = false;
    $('.main_nav>ul>li').on('mouseenter',function(){
        let listIndex = $(this).index();
        if(!mouseoverState){ //바깥진입시
            $(this).children('.sub').stop().slideDown(300);
            $('.gnb_bg').stop().slideDown(300);
            $(this).children('a').addClass('menu_hover');
        }else{ //li간 이동 진입시
            $('.main_nav').find('.sub:visible').hide();
            $(this).children('.sub').show();
            $('.main_nav>ul>li').children('a').removeClass('menu_hover');
            $(this).children('a').addClass('menu_hover');
        }
        mouseoverState=true;
    });
    $('.main_nav>ul').on('mouseleave',function(){
        $(this).find('.sub:visible').stop().slideUp(300);
        $('.gnb_bg').stop().slideUp(300);
        $('.main_nav>ul>li').children('a').removeClass('menu_hover');
        mouseoverState=false;
        });
    
        const banner=document.querySelector('.banner');
        
        const banner_ul=banner.getElementsByClassName('slide')[0];
        const banner_li=banner_ul.getElementsByTagName('li');
        let indexNum=0;
        let maxnum=banner_li.length;
        
        
        const bannerChange=()=>{
            for(let i=0; i<banner_li.length; i++){
                if(i==indexNum){
                    banner_li[i].style.display='block';
                }else{
                    banner_li[i].style.display='none';
                }
            }
            indexNum++;
            if(indexNum>=maxnum){indexNum=0;} // indexNum=indexNum%3;
        }
        
        bannerChange();
        setInterval(bannerChange,2000); 

        
        let $cartObj = $('.cart_wrap').find('div');

        for(i=0; i<$cartObj.length; i++){
            $cartObj.eq(i).css({'background' : 'url(img/icon/cart/img_'+(i+1)+'.png)','background-size':'cover'});
        }

        for(i=0; i<$cartObj.length; i++){
            const randomSpeed = Math.random()*10+10;
            const randomDelay = Math.random()*10+i;
            $($cartObj[i]).css('animation-duration', `${randomSpeed}s,0.23s`);
            $($cartObj[i]).css('animation-delay', `${randomDelay}s,0s`);
        }


        const searchbtn = document.querySelector('.search2')
        const storebtn = document.querySelector('.store')
        const my_ninbtn = document.querySelector('.my_nin')
        const search_close= document.querySelector('.close')
        const menu_icon = document.querySelector('.menu_icon')
        const close2 = document.querySelector('.close2')
        const m_nav = document.querySelector('.m_nav')
        const gnb_bg = document.querySelector('.gnb_bg')


        console.log(searchbtn)
        const searchbox = document.querySelector('.search_wrap')
        

        searchbtn.addEventListener('click',()=>{
            searchbox.style.display="block"
        })
        
        search_close.addEventListener('click',()=>{
            searchbox.style.display="none"
        })
        
        
        if(innerWidth < 680){
            searchbtn.addEventListener('click',()=>{
                searchbtn.style.display='none'
                storebtn.style.display='block'
                my_ninbtn.style.display='block'
            })
            search_close.addEventListener('click',()=>{
                searchbox.style.display="none"
                searchbtn.style.display='block'
                storebtn.style.display='none'
                my_ninbtn.style.display='none'
            })

            const menu = document.querySelector('.menu_icon')
            menu.addEventListener('click',()=>{
                document.querySelector('.m_nav').style.display='block'
                document.querySelector('.gnb_bg').style.display='block'
            })

            $('.m_nav>ul>li').on('click',function(){
                $(this).find('.sub').slideDown()
                $('.m_nav>ul>li').not(this).find('.sub').slideUp()
            })

            menu_icon.addEventListener('click',()=>{
                m_nav.style.display='block'
                gnb_bg.style.display='block'
                menu_icon.style.display='none'
                close2.style.display='block'
            })

            close2.addEventListener('click',()=>{
                m_nav.style.display='none'
                gnb_bg.style.display='none'
                close2.style.display='none'
                menu_icon.style.display='block'
            })
        }


            
        


        })