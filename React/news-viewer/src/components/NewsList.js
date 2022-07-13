import React, {useState,useEffect} from "react";
import styled from 'styled-components';
import NewsItem from './newsItem';
//import axios from "../../node_modules/axios/index";
import axios from 'axios';

const NewsListBlock = styled.div`
box-sizing:border-box;
padding-bottom:3rem;
width:768px;
margin: 0 auto;
margin-top:2rem;
@media screen and (max-width:768px){
    width:100%;
    padding-left:1rem;
    padding-right:1rem;
}
`;
/*
const sampleArticle = {
    title:"제목",
    description:"내용",
    url:'https://google.com',
    urlToImage:'https://via.placeholder.com/160',
};

const NewsList = () =>{
    return(
        <NewsListBox>
            <NewsItem article={sampleArticle}/>
            <NewsItem article={sampleArticle}/>
            <NewsItem article={sampleArticle}/>
            <NewsItem article={sampleArticle}/>
            <NewsItem article={sampleArticle}/>
            <NewsItem article={sampleArticle}/>
        </NewsListBox>
    )
}
*/
const NewsList=()=>{
    //useState
    const [articles, setArticles]=useState(null);
    const [loading,setLoading]=useState(null);

    useEffect(()=>{
        //async를 사용하는 함수 따로 선언
        const fetchData= async ()=>{
            setLoading(true);
            try{
                const response= await axios.get('https://newsapi.org/v2/top-headlines?country=kr&apiKey=156ada56ab334aa6b35427765dc8a12b',);
                setArticles(response.data.articles);
            }catch(e){
                console.log(e)
            }
            setLoading(false);
        };
        fetchData();
    },[]);

    if (loading){
        return <NewsListBlock>대기 중..</NewsListBlock>;
    }
    if (!articles){
        return null;
    }
    return(
        <NewsListBlock>
            {articles.map(article=>(<NewsItem key={article.url} article={article
            }/>))}
        </NewsListBlock>
    );
};


export default NewsList;