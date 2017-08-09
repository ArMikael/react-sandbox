import React from 'react';
import { Twitter as TwitterAPI } from 'twitter';

class Twitt extends React.Component{
    constructor(){
        super();

        this.userList = [];
    }

    connectTwitterApi() {
        var twitter = new TwitterAPI({
            consumer_key: 'iZDT4itec6YTDywaOxQZhUtZV',
            consumer_secret: '7CINFz2yaY1ktJu6LBtiMdkEHlTGAY00jt9Rj0jUznsXWjtInc',
            access_token_key: '894972708366299137-rFvnRlkYzuF55GDFfAcw1Ekcr1vtnZs',
            access_token_secret: '2CMWrCNg2pqYJO2I42fXwZpHaYdIxmGiI5wBplfsU4G4P'
        });

        twitter.get('users/lookup', {screen_name: 'paul_irish, jeresig, LeaVerou, addyosmani'},
            function (error, users) {

                var usersList = [];

                users.forEach(function (user) {
                    var userObj = {
                        name: user.name,
                        description: user.description,
                        location: user.location
                    };

                    usersList.push(userObj);
                });

                console.log(usersList);
            })
    }

    render() {
        return (
            <div>
                <h2>I'm Twitt component</h2>
                {  }
            </div>
        );
    }
}

export default Twitt;
