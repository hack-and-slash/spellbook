import { Spell } from 'src/models/spell';

const holySpellBook: Spell[][] = [
  [
    {
      name: 'Apodrecimento',
      description:
        'Esta magia apodrece comida e bebida, deteriorando-a e tornando-a imprópria para o consumo.',
      stats: ['Divina 1', 'Alcance: toque', 'Duração: permanente'],
    },
    {
      name: 'Arma abençoada',
      description:
        'Esta magia permite ao clérigo abençoar qualquer arma natural de pedra ou de madeira não mágica, concedendo lhe um bônus de +1 no ataque. A arma abençoada recebe ainda um bônus de +1d4 no dano causado.',
      stats: [
        'Divina 1',
        'Alcance: toque',
        'Duração: 1d4 turnos +1 turno/nível',
      ],
    },
    {
      name: 'Cativar animais',
      description:
        'Com esta magia é possível acalmar e conquistar a confiança de animais selvagens e criaturas não inteligentes. Os animais podem fazer uma jogada de proteção para resistir e mesmo assim apenas serão cativados caso a intenção do clérigo seja realmente sincera. Caso o clérigo esteja com segundas intenções (como enganar, comer, caçar, aprisionar e etc.), os animais perceberão e sequer precisarão fazer a jogada de proteção. Animais que forem cativados seguirão o clérigo, que pode ainda lhes treinar e ensinar pequenos truques.',
      stats: [
        'Divina 1',
        'Alcance: raio de 3 metros + 1 metro/nível',
        'Duração: permanente',
        'Jogada de proteção: JP+SAB nega',
      ],
    },
    {
      name: 'Círculo de fé',
      description:
        'Com esta magia, um grupo de clérigos consegue ampliar os efeitos das magias lançadas pelo clérigo mais poderoso do grupo, que deve ficar ao centro enquanto os outros fazem um círculo com as mãos e entoam cânticos sagrados ao seu redor. O clérigo no centro do grupo lança o círculo de fé e, para cada clérigo que estiver compondo o círculo, será considerado como se fosse um nível mais alto, até um máximo de +5. O ganho de níveis também pode ser utilizado para afastar mortos-vivos, e os efeitos desse círculo durarão até o clérigo principal descansar.',
      stats: ['Divina 1', 'Alcance: toque', 'Duração: especial (ver texto)'],
    },
    {
      name: 'Comando',
      description:
        'Esta magia permite ao clérigo dar uma ordem simples e direta a um alvo que falhe em uma jogada de proteção modificada pela Sabedoria. A vítima deve entender a linguagem do clérigo e obedecerá à ordem cegamente. As ordens mais comuns costumam ser pare, volte, fuja, corra, caia, renda-se, etc.',
      stats: [
        'Divina 1',
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
        'Divina 1',
        'Alcance: raio de 10 metros + 3 metros/nível',
        'Duração: 1d6 turnos + 1 turno/nível',
      ],
    },
    {
      name: 'Criar água',
      description:
        'Esta magia cria uma pequena quantidade de água potável para até 2 homens por nível do clérigo (até o nível 10). Do nível 11 em diante, o clérigo consegue criar água suficiente para 4 homens por nível.',
      stats: [
        'Divina 1',
        'Alcance: raio de 3 metros + 1 metro/nível',
        'Duração: permanente',
      ],
    },
    {
      name: 'Causar ferimentos',
      description:
        'Causa 1d8 pontos de dano +1 ponto de dano por nível (até um máximo de +4). Esta magia pode ser memorizada como uma magia de 4º círculo para causar 2d8 pontos de dano +1 de dano por nível (até um máximo de +8), ou como uma magia de 5º círculo, para causar 3d8 pontos de dano +1 de dano por nível (até um máximo de +12), ou como uma magia de 6º círculo, para matar o alvo. Uma jogada de proteção modificada pela Constituição nega esses efeitos.',
      stats: [
        'Divina 1, 4, 5, 6',
        'Alcance: toque',
        'Duração: instantânea',
        'Jogada de proteção: JP+-CON nega',
      ],
    },
    {
      name: 'Curar ferimentos',
      description:
        'Cura 1d8 pontos de vida +1 PV por nível (até um máximo de +4). Esta magia pode ser memorizada como uma magia de 4º círculo para curar 2d8 pontos de vida +1 PV por nível (até um máximo de +8), ou como uma magia de 5º círculo, para curar 3d8 pontos de vida +1 PV por nível (até um máximo de +12), ou como uma magia de 6º círculo, para curar qualquer ferimento, doença ou condição que debilite a saúde do alvo, como cegueira, surdez e efeitos mentais, restaurando ainda membros perdidos e recuperando todos os pontos de vida ao seu nível máximo.',
      stats: ['Divina 1, 4, 5, 6', 'Alcance: toque', 'Duração: instantânea'],
    },
    {
      name: 'Detectar alinhamento',
      description:
        'Esta magia possibilita ao personagem que se concentrar por um turno inteiro detectar a aura de uma pessoa ou objeto, determinando assim o seu alinhamento. Alinhamentos magicamente ocultos se revelarão sempre como neutros.',
      stats: [
        'Divina 1, Arcana 2',
        'Alcance: raio de 10 metros + 3 metros/nível',
        'Duração: 1d6 turnos + 1 turno/nível',
      ],
    },
    {
      name: 'Detectar magia',
      description:
        'O personagem pode perceber em lugares, pessoas ou coisas, a presença de uma magia. Os alvos detectados emitem um leve brilho azulado, que não é perceptível aos olhos das outras pessoas. Caso o alvo seja caótico, a aura emitirá um brilho errático. Por exemplo: itens mágicos podem ser descobertos desta forma, assim como a presença de um feitiço secretamente colocado em uma pessoa.',
      stats: [
        'Arcana 1, Divina 1',
        'Alcance: raio de 10 metros + 3 metros/nível',
        'Duração: 1d6 turnos +1 turno/nível',
      ],
    },
    {
      name: 'Detectar mortos-vivos',
      description: 'JSX',
      stats: [
        'Divina 1, Arcana 1',
        'Alcance: 50 metros',
        'Área: cone',
        'Duração: até 1 minuto/nível',
      ],
    },
    {
      name: 'Detectar venenos',
      description:
        'Esta magia possibilita ao clérigo detectar se há veneno em um objeto, comida ou ferimento.',
      stats: [
        'Divina 1',
        'Alcance: pessoal',
        'Duração: 1d4 turnos + 1 turno/nível',
      ],
    },
    {
      name: 'Luz',
      description:
        'O objeto alvo produz luz tão brilhante quanto uma tocha, que ilumina uma área com raio de 6 metros por 1 hora+10 minutos/nível. Se memorizada como uma magia de 2º círculo, a luz emite o brilho enquanto o personagem desejar.',
      stats: [
        'Arcana 1, 2, Divina 1, 2',
        'Alcance: toque',
        'Duração: especial (ver texto)',
      ],
    },
    {
      name: 'Proteção contra calor/frio',
      description:
        'Esta magia faz com que calor ou frio extremos se tornem inofensivos para o alvo da magia. Temperaturas de -25° a até 55° são percebidas como temperaturas amenas.',
      stats: [
        'Divina 1',
        'Alcance: toque',
        'Duração: 1 hora + 10 minutos/nível',
      ],
    },
    {
      name: 'Proteção contra alinhamento',
      description:
        'Esta magia cria uma barreira mágica invisível ao redor do personagem, o protegendo de qualquer ataque realizado por uma criatura/fonte caótica ou ordeira. Os ataques físicos recebem uma penalidade de -2. A proteção confere 25% de resistência à magia ao personagem. Se preparada como uma magia de terceiro círculo, ao invés de proteger apenas o personagem que lançou a magia, protege todos os aliados em uma área de 9 metros de raio ao seu redor. Neste caso, ela pode ser utilizada não só como uma forma de proteção, mas também para prender em seu interior uma criatura de determinado alinhamento por 24 horas por nível. Uma criatura aprisionada que tenha resistência à magia pode testar a sua resistência uma vez ao dia. Em caso de sucesso, consegue transpassar a barreira mágica.',
      stats: [
        'Arcana 1, 3, Divina 1, 3',
        'Alcance: pessoal',
        'Duração: 1d6 turnos + 1 turno/nível',
        'RM: Sim',
      ],
    },
    {
      name: 'Purificar alimentos',
      description:
        'Esta magia purifica comida e bebida suficiente para doze pessoas, removendo deteriorações e venenos ou qualquer outro efeito negativo não mágico.',
      stats: ['Divina 1', 'Alcance: toque', 'Duração: permanente'],
    },
    {
      name: 'Remover medo',
      description:
        'Esta magia tem dois efeitos: anula qualquer efeito de medo (seja ele oriundo de magia ou não) que esteja incidindo no alvo; ou concede aos alvos um bônus de +4 para jogadas de proteção modificadas pela Sabedoria para resistir a efeitos de medo O segundo efeito só será possível se o alvo não estiver sob efeito de qualquer tipo de medo. Esta magia afeta uma criatura tocada para cada 4 níveis do clérigo.',
      stats: [
        'Divina 1',
        'Alcance: especial (ver texto)',
        'Duração: permanente',
      ],
    },
    {
      name: 'Santuário',
      description:
        'Esta magia cria uma aura de proteção no clérigo, que faz com que todos aqueles com desejo de atacá-lo tenham que realizar uma jogada de proteção modificada pela Sabedoria. Caso falhem, ignorarão o clérigo até o final do efeito da magia.',
      stats: [
        'Divina 1',
        'Alcance: pessoal',
        'Duração: 1d4 turnos + 1 turno/nível',
        'Jogada de proteção: JP+SAB nega',
      ],
    },
  ],
];

export default holySpellBook;
