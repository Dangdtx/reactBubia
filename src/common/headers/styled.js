import styled from "styled-components"

export const HeadersWrapper = styled.div`
    width:100%;
    height:.7rem;
    background-color:#FFFFFF; 
    position: fixed;
    left:0;
    top:0;
    display:flex;
    justify-content:center;
    align-items:center;
    z-index:10;
    .header_left{
        vertical-align: middle;
        height: .52rem;
        width: .44rem;
        position: absolute;
        top: 0;
        left: 0;
        a{
            display: block;
            width: 100%;
            height: 100%;
            text-align: center;
            font-size: 1.5rem;
            color: #f0374e; 
            margin:.1rem 0 0 .1rem;
        }
        img{
            width:100%;
            height:100%;
            border-radius:30%;
        }
    } 
    .header_center{
        position:relative;
        width:75%;
        height:.42rem; 
        background:  #b5bec5;
        border-radius:.2rem;
        display:flex:
        justify-content:center;
        align-items:center;
        margin:0rem;
        padding:0rem;
        span{
            position: absolute;
            top: .12rem; 
            left:.25rem;
        }
        input{
            width:80%;
            position: absolute;
            top: .12rem; 
            left: .5rem;
            background:  #b5bec5; 
            outline: none;
            border:none;
            font-size: .13rem; 
             
        }
        
    }
    .header_right{
        vertical-align: middle;
        position: absolute;
        top: .25rem;
        right: 0;
        width: .7rem;
        height: .7rem;
        a{
            display:block;
            width:100%;
            height:100%;
            div{
                width:100%;
                height:100%;
            }
        }
    }
`