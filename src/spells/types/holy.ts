import { Spell } from 'src/models/spell';

const holySpellBook: Spell[][] = [
  [
    {
      name: 'Apodrecimento',
      description:
        'Esta magia apodrece comida e bebida, deteriorando-a e tornando-a imprópria para o consumo.',
      stats: ['Alcance: toque', 'Duração: permanente'],
    },
    {
      name: 'Arma abençoada',
      description:
        'Esta magia permite ao clérigo abençoar qualquer arma natural de pedra ou de madeira não mágica, concedendo lhe um bônus de +1 no ataque. A arma abençoada recebe ainda um bônus de +1d4 no dano causado.',
      stats: ['Alcance: toque', 'Duração: 1d4 turnos +1 turno/nível'],
    },
    {
      name: 'Cativar animais',
      description:
        'Com esta magia é possível acalmar e conquistar a confiança de animais selvagens e criaturas não inteligentes. Os animais podem fazer uma jogada de proteção para resistir e mesmo assim apenas serão cativados caso a intenção do clérigo seja realmente sincera. Caso o clérigo esteja com segundas intenções (como enganar, comer, caçar, aprisionar e etc.), os animais perceberão e sequer precisarão fazer a jogada de proteção. Animais que forem cativados seguirão o clérigo, que pode ainda lhes treinar e ensinar pequenos truques.',
      stats: [
        'Alcance: raio de 3 metros + 1 metro/nível',
        'Duração: permanente',
        'Jogada de proteção: JP+SAB nega',
      ],
    },
    {
      name: 'Círculo de fé',
      description:
        'Com esta magia, um grupo de clérigos consegue ampliar os efeitos das magias lançadas pelo clérigo mais poderoso do grupo, que deve ficar ao centro enquanto os outros fazem um círculo com as mãos e entoam cânticos sagrados ao seu redor. O clérigo no centro do grupo lança o círculo de fé e, para cada clérigo que estiver compondo o círculo, será considerado como se fosse um nível mais alto, até um máximo de +5. O ganho de níveis também pode ser utilizado para afastar mortos-vivos, e os efeitos desse círculo durarão até o clérigo principal descansar.',
      stats: ['Alcance: toque', 'Duração: especial (ver texto)'],
    },
    {
      name: 'Comando',
      description:
        'Esta magia permite ao clérigo dar uma ordem simples e direta a um alvo que falhe em uma jogada de proteção modificada pela Sabedoria. A vítima deve entender a linguagem do clérigo e obedecerá à ordem cegamente. As ordens mais comuns costumam ser pare, volte, fuja, corra, caia, renda-se, etc.',
      stats: [
        'Alcance: raio de 10 metros + 3 metros/nível',
        'Duração: 1d4 turnos + 1 turno/ nível',
        'Jogada de proteção: JP+SAB nega',
      ],
    },
    {
      name: 'Constrição',
      description:
        'O clérigo consegue animar todas as plantas dentro de um raio de até 10 metros para que agarrem e apertem todos os seres vivos que passarem por ali. Todos que tentem se locomover terão sua movimentação reduzida em 1 metro para cada 6 turnos que passarem na área.',
      stats: [
        'Alcance: raio de 10 metros + 3 metros/nível',
        'Duração: 1d6 turnos + 1 turno/nível',
      ],
    },
    {
      name: 'Criar água',
      description: '',
      stats: [],
    },
    {
      name: 'Causar ferimentos',
      description: '',
      stats: [],
    },
    {
      name: 'Curar ferimentos',
      description: '',
      stats: [],
    },
    {
      name: 'Detectar alinhamento',
      description: '',
      stats: [],
    },
    {
      name: 'Detectar magia',
      description: '',
      stats: [],
    },
    {
      name: 'Detectar mortos-vivos',
      description: '',
      stats: [],
    },
    {
      name: 'Detectar venenos',
      description: '',
      stats: [],
    },
    {
      name: 'Luz',
      description: '',
      stats: [],
    },
    {
      name: 'Proteção contra calor/frio',
      description: '',
      stats: [],
    },
    {
      name: 'Proteção contra alinhamento',
      description: '',
      stats: [],
    },
    {
      name: 'Purificar alimentos',
      description: '',
      stats: [],
    },
    {
      name: 'Remover medo',
      description: '',
      stats: [],
    },
    {
      name: 'Santuário',
      description: '',
      stats: [],
    },
  ],
];

export default holySpellBook;
