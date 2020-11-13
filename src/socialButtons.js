import React, { Component } from 'react';
import './icomoon.css';

export default class SocialButtons extends Component {
    render() {
        return(
            <ul class="ftco-footer-social list-unstyled float-md-right float-right">
                <li class=""><a href="https://twitter.com/FoodPyramidWTF" target="_blank" rel="noreferrer"><span class="icon-twitter"></span></a></li>
                <li class=""><a href="https://discord.gg/zaT4Zb3" target="_blank" rel="noreferrer"><span class="icon-discord"><img src="images/discord.png" class="discordlogo" alt="discord logo"/></span></a></li>
                <li class=""><a href="https://t.me/joinchat/JjV7ewd3dVUJcOw8wRWs4w" target="_blank" rel="noreferrer"><span class="icon-telegram"></span></a></li>
                <li class=""><a href="https://medium.com/@FoodPyramid" target="_blank" rel="noreferrer"><span class="icon-medium"></span></a></li>
            </ul>
        )
    }
}