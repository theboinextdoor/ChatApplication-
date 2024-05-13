export function getRandomEmoji() {
     // Array of emojis
     const emojis = [
       '😀', '😄', '😃', '😁', '😆', '😅', '😂', '🤣', '😊', '😇',
       '🙂', '🙃', '😉', '😌', '😍', '😘', '😗', '😙', '😚', '😋',
       '😛', '😝', '😜', '🤪', '🤨', '🧐', '🤓', '😎', '🤩', '🥳',
       '😏', '😒', '😞', '😔', '😟', '😕', '🙁', '😣', '😖', '😫',
       '😩', '😤', '😠', '😡', '🤬', '😈', '👿', '💀', '☠️', '💩',
       '🤡', '👹', '👺', '👻', '👽', '👾', '🤖', '😺', '😸', '😹',
       '😻', '😼', '😽', '🙀', '😿', '😾'
     ];
   
     // Get a random index
     const randomIndex = Math.floor(Math.random() * emojis.length);
   
     // Return the random emoji
     return emojis[randomIndex];
   }
   
  