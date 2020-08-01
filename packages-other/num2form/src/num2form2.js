/**
* https://wp-kama.ru/id_8475/poleznye-php-kody-dlya-opytnyh.html/comment-page-1#kak-razbit-predlozhenie-na-slova-v-php
*
* Использование:
*
num2form2(
  get_comments_number(),
  // варианты написания для количества 1, 2 и 5
  array( 'опубликован', 'опубликовано', 'опубликовано' ),
  array( 'комментарий', 'комментария', 'комментариев' )
);
*
*/
export default function num2form2(n, $before, $after) {
  const $cases = [2, 0, 1, 1, 1, 2];
  return `${$before[n % 100 > 4 && n % 100 < 20 ? 2 : $cases[Math.min(n % 10, 5)]]} ${String(n)} ${
    $after[n % 100 > 4 && n % 100 < 20 ? 2 : $cases[Math.min(n % 10, 5)]]
  }`;
}
