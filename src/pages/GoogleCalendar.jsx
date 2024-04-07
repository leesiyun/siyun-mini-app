import styled from 'styled-components'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import googleCalendarPlugin from '@fullcalendar/google-calendar'
import koLocale from '@fullcalendar/core/locales/ko'

const GoogleCalendar = () => {
  const apiKey = import.meta.env.VITE_CAL_API_KEY

  const onClick = (info) => info.jsEvent.preventDefault()

  return (
    <GoogleCalendarStyle>
      <FullCalendar
        plugins={[dayGridPlugin, googleCalendarPlugin]}
        initialView='dayGridMonth'
        googleCalendarApiKey={apiKey}
        events={{
          googleCalendarId: 'leesiyun.dev@gmail.com',
        }}
        height={'660px'}
        locale={koLocale}
        eventClick={onClick}
      />
    </GoogleCalendarStyle>
  )
}

export default GoogleCalendar

const GoogleCalendarStyle = styled.div`
  margin-top: 50px;
  width: 800px;
  a {
    color: rgb(60, 64, 67) !important;
  }import { GoogleCalendar } from '@/pages';

  .fc-event {
    cursor: default;
  }
`
