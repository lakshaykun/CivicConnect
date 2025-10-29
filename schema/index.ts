interface User {
  name: string;
  email: string;
  city: string;
}

interface Issue {
  id: string;
  title: string;
  department: string;
  location: string;
  status: string;
  image: string;
  description: string;
  progressComment: string;
}


export type { User, Issue };