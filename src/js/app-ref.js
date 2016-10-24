(function() {
    'use strict';

    $('nav').on('click', 'div', function() {
      $('nav').find('.active').removeClass('active');
      $(this).addClass('active');
    });

    angular.module('rosters', []).controller('TeamRosters', function() {
        this.allTeams = {
            thunder: [
                {
                    number: 0,
                    name: 'Russell Westbrook',
                    position: 'Guard',
                    image: 'http://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201566.png'
                }, {
                    number: 21,
                    name: 'Andre Roberson',
                    position: 'Guard',
                    image: 'http://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203460.png'
                }, {
                    number: 15,
                    name: 'Kyle Singler',
                    position: 'Forward',
                    image: 'http://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/202713.png'
                }, {
                    number: 7,
                    name: 'Ersan Ilyasova',
                    position: 'Forward',
                    image: 'http://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/101141.png'
                }, {
                    number: 12,
                    name: 'Steven Adams',
                    position: 'Center',
                    image: 'http://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203500.png'
                }
            ],
            hornets: [
                {
                    number: 15,
                    name: 'Kemba Walker',
                    position: 'Guard',
                    image: 'http://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/202689.png'
                }, {
                    number: 3,
                    name: 'Jeremy Lamb',
                    position: 'Guard',
                    image: 'http://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203087.png'
                }, {
                    number: 14,
                    name: 'Michael Kidd-Gilchrist',
                    position: 'Forward',
                    image: 'http://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203077.png'
                }, {
                    number: 40,
                    name: 'Cody Zeller',
                    position: 'Forward',
                    image: 'http://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203469.png'
                }, {
                    number: 44,
                    name: 'Frank Kaminsky',
                    position: 'Center',
                    image: 'http://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/1626163.png'
                }
            ],
            clippers: [
                {
                    number: 3,
                    name: 'Chris Paul',
                    position: 'Guard',
                    image: 'http://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/101108.png'
                }, {
                    number: 4,
                    name: 'J.J. Redick',
                    position: 'Guard',
                    image: 'http://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/200755.png'
                }, {
                    number: 12,
                    name: 'Luc Mbah a Moute',
                    position: 'Forward',
                    image: 'http://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201601.png'
                }, {
                    number: 32,
                    name: 'Blake Griffen',
                    position: 'Forward',
                    image: 'http://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201933.png'
                }, {
                    number: 6,
                    name: 'DeAndre Jordan',
                    position: 'Center',
                    image: 'http://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201599.png'
                }
            ],
            lynx: [
                {
                    number: 13,
                    name: 'Lindsay Whalen',
                    position: 'Guard',
                    image: 'http://ak-static.cms.nba.com/wp-content/uploads/headshots/wnba/100915.png'
                }, {
                    number: 33,
                    name: 'Seimone Augustus',
                    position: 'Guard',
                    image: 'http://ak-static.cms.nba.com/wp-content/uploads/headshots/wnba/200671.png'
                }, {
                    number: 7,
                    name: 'Jia Perkins',
                    position: 'Guard',
                    image: 'http://ak-static.cms.nba.com/wp-content/uploads/headshots/wnba/100952.png'
                }, {
                    number: 23,
                    name: 'Maya Moore',
                    position: 'Forward',
                    image: 'http://ak-static.cms.nba.com/wp-content/uploads/headshots/wnba/202632.png'
                }, {
                    number: 34,
                    name: 'Sylvia Fowles',
                    position: 'Center',
                    image: 'http://ak-static.cms.nba.com/wp-content/uploads/headshots/wnba/201480.png'
                }
            ],
            sparks: [
                {
                    number: 20,
                    name: 'Kristi Toliver',
                    position: 'Guard',
                    image: 'http://ak-static.cms.nba.com/wp-content/uploads/headshots/wnba/201911.png'
                }, {
                    number: 0,
                    name: 'Alana Beard',
                    position: 'Guard',
                    image: 'http://ak-static.cms.nba.com/wp-content/uploads/headshots/wnba/100949.png'
                }, {
                    number: 17,
                    name: 'Essence Carson',
                    position: 'Forward',
                    image: 'http://ak-static.cms.nba.com/wp-content/uploads/headshots/wnba/201502.png'
                }, {
                    number: 3,
                    name: 'Candace Parker',
                    position: 'Forward',
                    image: 'http://ak-static.cms.nba.com/wp-content/uploads/headshots/wnba/201496.png'
                }, {
                    number: 30,
                    name: 'Nneka Ogwumike',
                    position: 'Center',
                    image: 'http://ak-static.cms.nba.com/wp-content/uploads/headshots/wnba/203014.png'
                }
            ]
        };
        this.selectedTeam = null;
        this.selectedPlayer = null;

        this.showRoster = function(team) {
          this.selectedPlayer = null;
          this.selectedTeam = this.allTeams[team];
        };

        this.selectPlayer = function(player) {
            for (var index = 0; index < 5; index++) {
                if (player === this.selectedTeam[index].name) {
                    this.selectedPlayer = this.selectedTeam[index];
                }
            }
        }
    });
})();
