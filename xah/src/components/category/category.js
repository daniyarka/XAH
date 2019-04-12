import React, { Component } from 'react';
import { Button, Container , Row, Col, Image} from 'react-bootstrap';
import './category.css';
import '../../assets/scss/theme.scss'

class Category extends Component {
  render() {
    return (
        <div class = "main-container"> 
            <div class="all-posts">
                <div class="post">
                    <div class="post-img">
                        <img src="https://tengrinews.kz/userdata/news/2019/news_364155/thumb_xm/photo_273822.jpg" alt="img"/>
                    </div>
                    <div class="post-word">
                        <div class="post-date">
                            <p>28.02.2019</p>
                        </div>
                        <h2>Какие поручения новому правительству дал Назарбаев: полный список</h2>
                        <p class="post-text">Появился полный текст выступления Нурсултана Назарбаева на XVIII съезде партии "Hұp Отан", сообщает Tengrinews.kz со ссылкой на пресс-службу Акорды. 
                        В ходе съезда Президент отметил, что новое время диктует новые вызовы, а мир вокруг все глубже погружается в зону перманентной турбулентности.</p>
                        <a href="" class="read-more">Читать далее</a>
                    </div>			
                </div>
                <hr id="line"/>	

                <div class="post">
                    <div class="post-img">
                        <img src="https://tengrinews.kz/userdata/news/2019/news_364155/thumb_xm/photo_273822.jpg" alt="img"/>
                    </div>
                    <div class="post-word">
                        <div class="post-date">
                            <p>26.02.2019</p>
                        </div>
                        <h2>Какие поручения новому правительству дал Назарбаев: полный список</h2>
                        <p class="post-text">Появился полный текст выступления Нурсултана Назарбаева на XVIII съезде партии "Hұp Отан", сообщает Tengrinews.kz со ссылкой на пресс-службу Акорды. 
                        В ходе съезда Президент отметил, что новое время диктует новые вызовы, а мир вокруг все глубже погружается в зону перманентной турбулентности.</p>
                        <a href="" class="read-more">Читать далее</a>
                    </div>			
                </div>
                <hr id="line"/>	

                <div class="post">
                    <div class="post-img">
                        <img src="https://tengrinews.kz/userdata/news/2019/news_364155/thumb_xm/photo_273822.jpg" alt="img"/>
                    </div>
                    <div class="post-word">
                        <div class="post-date">
                            <p>18.02.2019</p>
                        </div>
                        <h2>Какие поручения новому правительству дал Назарбаев: полный список</h2>
                        <p class="post-text">Появился полный текст выступления Нурсултана Назарбаева на XVIII съезде партии "Hұp Отан", сообщает Tengrinews.kz со ссылкой на пресс-службу Акорды. 
                        В ходе съезда Президент отметил, что новое время диктует новые вызовы, а мир вокруг все глубже погружается в зону перманентной турбулентности.</p>
                        <a href="" class="read-more">Читать далее</a>
                    </div>			
                </div>	
            </div>
            <div class='right__images'>
                <a href="">
                    <img src="https://www.liat.com/UserFiles/Image/adspecs.jpg" alt="Реклама"/>
                </a>
                <a href='' class='link'>Реклама на сайте</a>
            </div>
        </div>
    );
  }
}

export default Category;
