import moment from 'moment';

function Calendar({ date }) {
  moment.locale('ru', {
    weekdays : 'Воскресенье_Понедельник_Вторник_Среда_Четверг_Пятница_Суббота'.split('_'),
    months : 'Январь_Февраль_Март_Апрель_Май_Июнь_Июль_Август_Сентябрь_Октябрь_Ноябрь_Декабрь'.split('_'),
    monthsShort : 'Января_Февраля_Марта_Апреля_Мая_Июня_Июля_Августа_Сентября_Октября_Ноября_Декабря'.split('_'),
  });

  const datesArray = [];
  // for (let i = moment(date).startOf('month').format(); i <= moment(date).endOf('month').format(); i += 86400) {
  //   datesArray.push(i);
  // }
  // console.log(datesArray);
  console.log(moment(date).startOf('month').format());

  return (
    <div className="ui-datepicker">
      <div className="ui-datepicker-material-header">
        <div className="ui-datepicker-material-day">{moment(date).format('dddd')}</div>
        <div className="ui-datepicker-material-date">
          <div className="ui-datepicker-material-day-num">{moment(date).format('D')}</div>
          <div className="ui-datepicker-material-month">{moment(date).format('MMM')}</div>
          <div className="ui-datepicker-material-year">{moment(date).format('YYYY')}</div>
        </div>
      </div>
      <div className="ui-datepicker-header">
        <div className="ui-datepicker-title">
          <span className="ui-datepicker-month">{moment(date).format('MMMM')}</span>&nbsp;<span className="ui-datepicker-year">{moment(date).format('YYYY')}</span>
        </div>
      </div>
      <table className="ui-datepicker-calendar">
        <colgroup>
          <col />
          <col />
          <col />
          <col />
          <col />
          <col className="ui-datepicker-week-end" />
          <col className="ui-datepicker-week-end" />
        </colgroup>
        <thead>
          <tr>
            <th scope="col" title="Понедельник">Пн</th>
            <th scope="col" title="Вторник">Вт</th>
            <th scope="col" title="Среда">Ср</th>
            <th scope="col" title="Четверг">Чт</th>
            <th scope="col" title="Пятница">Пт</th>
            <th scope="col" title="Суббота">Сб</th>
            <th scope="col" title="Воскресенье">Вс</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="ui-datepicker-other-month">27</td>
            <td className="ui-datepicker-other-month">28</td>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
          </tr>
          <tr>
            <td>6</td>
            <td>7</td>
            <td className="ui-datepicker-today">8</td>
            <td>9</td>
            <td>10</td>
            <td>11</td>
            <td>12</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Calendar;