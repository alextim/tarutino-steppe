/**
* Функция склонение после числительных
*
* Использование:
*
$array = array(1, 2, 5);
	foreach($array as $n){
	echo num2form($n, "день", "дня", "дней") . "<br>";
}

1 день
2 дня
5 дней

*/
export default function num2form(n, forma1, forma2, forma3) {
  let result;
  if (n === 0) result = forma3;
  else if (n >= 5 && n <= 20) result = forma3;
  else if (/[056789]$/.test(String(n))) result = forma3;
  else if (/[1]$/.test(String(n))) result = forma1;
  else if (/[234]$/.test(String(n))) result = forma2;

  return `${n} ${result}`;
}
