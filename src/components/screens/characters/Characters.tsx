import Card from './Card';
import { Container, Cards } from './styles/Characters';

type CardsProps = {
  id: number;
  name: string;
  imgURL: string;
  description: string;
};

const cards: CardsProps[] = [
  {
    id: 1,
    name: 'Spider Man',
    imgURL: '/public/img/cards/spider-man.svg',
    description:
      'Após ser mordido por uma aranha radioativa, Peter Parker se torna o amigo da vizinhança, o Homem-Aranha.',
  },
  {
    id: 2,
    name: 'Scarlet Witch',
    imgURL: '/public/img/cards/scarlet-witch.svg',
    description:
      'Wanda Maximoff foi sequestrada da Sérvia e trazida para a Montanha Wundagore, base do Alto Evolucionário. Durante anos, ela e seu irmão gêmeo, Pietro, acreditavam que eram filhos de um casal de ciganos.',
  },
];

const Characters = () => {
  return (
    <Container>
      <Cards>
        {cards.map((card) => (
          <Card
            key={card.id}
            name={card.name}
            imgURL={card.imgURL}
            description={card.description}
          />
        ))}
      </Cards>
    </Container>
  );
};

export default Characters;
