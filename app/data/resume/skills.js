// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Data Science, ML Engineering, ... ?

const skills = [{
  title: 'Javascript',
  competency: 2,
  category: ['Web Development', 'Languages', 'Javascript'],
},
{
  title: 'Node.JS',
  competency: 2,
  category: ['Web Development', 'Javascript'],
},
{
  title: 'React',
  competency: 2,
  category: ['Web Development', 'Javascript'],
},
{
  title: 'Google Cloud Platform',
  competency: 4,
  category: ['Web Development', 'Tools'],
},
{
  title: 'Gsuite',
  competency: 4,
  category: ['Web Development', 'Tools'],
},
{
  title: 'PostgreSQL/SQLite3/SQL',
  competency: 3,
  category: ['Web Development', 'Databases', 'Languages'],
},
{
  title: 'Git',
  competency: 3,
  category: ['Tools'],
},
{
  title: 'HTML + SASS/SCSS/CSS',
  competency: 4,
  category: ['Web Development', 'Languages'],
},
{
  title: 'Python',
  competency: 2,
  category: ['Languages'],
},
{
  title: 'C++',
  competency: 2,
  category: ['Languages'],
},
{
  title: 'MATLAB',
  competency: 3,
  category: ['Languages'],
},
{
  title: 'Data Visualization',
  competency: 3,
  category: ['Javascript'],
},
{
  title: 'Java',
  competency: 4,
  category: ['Languages'],
},
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [...new Set(
  skills.reduce((acc, { category }) => acc.concat(category), []),
)].sort().map((category, index) => ({
  name: category,
  color: colors[index],
}));

export { categories, skills };
