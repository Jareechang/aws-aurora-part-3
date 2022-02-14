import { parseISO, format } from 'date-fns'

function getDate(dateString) {
  return (new Date(dateString)).toLocaleString();
}

export default function Date(props) {
  if (!props?.dateString) return '';
  const date = parseISO(props.dateString);
  return <time dateTime={props.dateString}>{format(date, 'LLLL. dd, yyyy')}</time>
}
