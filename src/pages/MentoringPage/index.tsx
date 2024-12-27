import { Card, CardContent, Typography } from "@mui/material";
import "./index.scss";

function Mentoring() {
  return (
    <div className='mentoring'>
      <Typography variant='h5' className='mentoring-heading'>
        Frontend mentoring
      </Typography>
      <Typography variant="body2" gutterBottom>
        Привет! Я могу тебе помочь в твоем продвижении по фронтенду, поделюсь
        многогранным опытом, который я наработал за 5+ лет корпоративной
        разработки.
      </Typography>
      <Typography variant="body2" gutterBottom>
        Чтобы ты не сомневался в моей квалификации, я прошел в свое время
        обучения, такие как{" "}
        <strong>Computer Science 50 (CS50) от Harward University</strong>, а
        также курс по вебу от <strong>Яндекс и МФТИ</strong>. Но я не только
        учился все это время, в своей практике я также провел кучу собеседований
        на позиции от стажеров до миддлов и вел авторский курс по веб разработке
        внутри своей компании.
      </Typography>
      <Typography variant="body2" gutterBottom>
        <strong>Мой стек технологий:</strong> JavaScript, TypeScript, React,
        Redux, Mobx, HTML, CSS + SCSS
      </Typography>
      <Typography variant='h5' className='mentoring-heading'>
        Чем помогу:
      </Typography>

      <div className='mentoring-cards'>
        <Card sx={{ width: 275, background: "#484848" }}>
          <CardContent>
            <Typography gutterBottom>- Техническая помощь.</Typography>
            <Typography variant='body2'>
              Я помогу тебе с разбором интересующих тебя тем или тех что тебе не
              даются, в области фронтенда и компьютерных наук.
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ width: 275, background: "#484848" }}>
          <CardContent>
            <Typography gutterBottom>- Написание резюме</Typography>
            <Typography variant='body2'>
              - Я помогу тебе с написанием резюмеи подготовкой к собеседованиям
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ width: 275, background: "#484848" }}>
          <CardContent>
            <Typography gutterBottom>- Пробные собеседования</Typography>
            <Typography variant='body2'>
              проведу для тебя тестовые собеседования по каждому из блоков, будь
              то behavior собеседование на проверку твоих soft скиллов или же
              техническая часть.
            </Typography>
          </CardContent>
        </Card>
      </div>
      <p>
        ### [Запланировать встречу →](https://t.me/br1stl) ## Стоимость -
        часовое занятие - **4000 рублей** - мок собеседование (1,5 часа) -
        **5000 рублей** ## Контакты [**Telegram**](https://t.me/br1stl)
        [**Linkedin**](https://www.linkedin.com/in/anton-ivanov-461bba1b0/)
      </p>
      <a
        href='https://ivanovdevelop.notion.site/frontend-road-map-ec4e34b771a64b12b88fdf9f9c7764ed?pvs=74'
        target='__blank'
        className='mentoring-roadmap'
      >
        Ссылка на <strong>Frontend Roadmap</strong>
      </a>
      <embed
        src='https://reviews.it-mentors.ru/reviews?id=306138913&theme=notion-dark'
        width='100%'
        height='700px'
        className='mentoring-reviews'
      />
    </div>
  );
}

export { Mentoring };
