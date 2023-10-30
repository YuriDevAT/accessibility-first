import { parseISO, format } from 'date-fns'

type Props = {
  dateString: string
}

const DateFormatter = ({ dateString }: Props) => {
  const date = parseISO(dateString)
  return (
    <div className="md:ml-4 md:border-l md:border-l-black md:pl-4 font-mono text-lg">
      <time dateTime={dateString}>{format(date, 'LLLL	d, yyyy')}</time>
    </div>
  )
}

export default DateFormatter