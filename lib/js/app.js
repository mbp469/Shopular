'use strict';

(function () {
    'use strict';

    angular.module('nba-rosters', []).controller('startingFive', function () {
        this.allTeams = {
            thunder: [{
                number: 0,
                name: 'Russell Westbrook',
                position: 'Guard',
                image: 'http://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201566.png'
            }, {
                number: 5,
                name: 'Victor Oladipo',
                position: 'Guard'
            }, {
                number: 15,
                name: 'Kyle Singler',
                position: 'Forward'
            }, {
                number: 3,
                name: 'Domantas Sobonis',
                position: 'Forward'
            }, {
                number: 12,
                name: 'Steven Adams',
                position: 'Center'
            }]
        };
        this.selectedTeam = null;
        this.selectedPlayer = null;

        this.showRoster = function (team) {
            this.selectedTeam = this.allTeams[team];
        };

        this.selectPlayer = function (player) {
            console.log('in' + player);
            // for (var i = 0; i < this.thunder.length; i++) {
            //     if (clickedNum === this.thunder[i].number) {
            //         this.selectedPlayer = this.thunder[i];
            //     }
            // }
            // console.log(this.selectedPlayer);
        };
    });
    // .module('lecture', [])
    // .controller('HeaderController', function Header() {
    //     this.user = {
    //       firstName: 'Greatest',
    //       lastName: 'Ever'
    //     };
    //     this.getFullName = function() {
    //       return this.user.firstName +' '+ this.user.lastName
    //     }
    // })
    // .controller('FooterController', function Footer() {
    //   this.getCopyright = function() {
    //     return new Date().getFullYear();
    //   }
    // })
    // .controller('contentController', function content() {
    //   this.items = [
    //     {name: 'Ragnar Lothbrok', show: 'Vikings'},
    //     {name: 'Shawn Spencer', show: 'Psych'},
    //     {name: 'George Costanza', show: 'Seinfeld'},
    //     {name: 'Sterling Archer', show: 'Archer'}
    //   ]
    // });
})();
//# sourceMappingURL=app.js.map
