export class Post {
  id?: number; // id? znaci da id nije obavezan tj. moze biti prazan
  title: string;
  description: string;
  content: string;

  constructor() {

  }

  // konstruktor kao u javi - moze ali ne mora se kreirati ovdje

  /*constructor(title: string, desc: string, content: string) {
    this.title = title;
    this.description = desc;
    this.content = content;
  }*/
}

/*
*     novi create-post se moze kreirati na vise nacina
*
*
*     let p = new PostModel();  // samo ako nemamo konstruktora definisanog
*     p.title = 'naslov';
*
*
*     II nacin
*
*     let p = new PostModel('naslov', 'opis', 'sadrzaj');  -- jer imamo konstruktor
*
*
*
*
* */
