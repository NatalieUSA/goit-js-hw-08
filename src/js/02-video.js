import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');

const player = new Player(iframe);

const CURRENT_TIME = 'videoplayer-current-time';
console.log(player);
player.on(
  'timeupdate',
  throttle(e => {
    localStorage.setItem(CURRENT_TIME, JSON.stringify(e.seconds));
  }, 2500)
);

player
  .setCurrentTime(JSON.parse(localStorage.getItem(CURRENT_TIME)) || 0)
  .catch(function (error) {
    console.error('error');
  });
