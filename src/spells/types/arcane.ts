import { Spell } from 'src/models/spell';

const arcaneSpellBook: Spell[][] = [
  [
    {
      name: 'Abrir/Trancar',
      description:
        'Esta magia pode ser utilizada para dois efeitos distintos: abrir o acesso a qual-quer instrumento ou objeto que esteja fechado, trancado ou emperrado; e fe-char um acesso pela duração da magia (ou até ser dissipada).Criaturas com resistência a magia po-dem destrancar um objeto fechado por esta magia.',
      stats: [
        'Arcana 1',
        'Alcance: toque',
        'Duração: permanente',
      ],
    },
    {
      name: 'Animar corda',
      description:
        'O  mago  consegue  animar  uma  corda ou um objeto semelhante a uma corda. Os  comandos  possíveis  são:  enroscar, amarrar,  enrolar  e  aprisionar,  bem como  as  inversões  (esticar,  desamar-rar, desenrolar e libertar). Lançar um comando corresponde a uma ação de movimento. A corda só pode envolver uma criatura que esteja a 50 centíme-tros  de  distância,  devendo  ser  jogada sobre o alvo para que a magia seja lan-çada e surta efeitos.',
      stats: [
        'Arcana 1',
        'Alcance: 250 metros + 3 metros/nível',
        'Alvo: corda de até 15m de comprimento + 1,5m por nível',
        'Duração: 1 turno/nível',
      ],
    },
    {
      name: 'Apagar',
      description:
        'Esta magia remove qualquer conteúdo escrito  de  qualquer  superfície.  O  que estava escrito em cartas, documentos, pergaminhos, mapas e etc. é totalmen-te apagado.Caso a escrita seja parte de uma magia, use as mesmas regras de dissipar magias para determinar as chances de sucesso.',
      stats: [
        'Arcana 1',
        'Alcance: toque',
        'Duração: permanente',
      ],
    },
    {
      name: 'Detectar magia',
      description:
        'O personagem pode perceber em luga-res,  pessoas  ou  coisas,  a  presença  de uma magia. Os alvos detectados emi-tem  um  leve  brilho  azulado,  que  não é perceptível aos olhos das outras pes-soas. Caso o alvo seja caótico, a aura emitirá um brilho errático. Por exem-plo: itens mágicos podem ser descober-tos desta forma, assim como a presen-ça de um feitiço secretamente colocado em uma pessoa.',
      stats: [
        'Divina 1, Arcana 1',
        'Alcance: raio de 10 metros  +  3  metros/nível',
        'Duração:  1d6 turnos +1 turno/nível',
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
      name: 'Disco flutuante',
      description:
        'Com esta magia, o mago cria um dis-co flutuante de 1 metro de diâmetro, que o segue e carrega a sua carga. O disco consegue carregar 50 quilos por nível de mago. O disco flutua a 1 me-tro do chão e se mantém sempre reto. A não ser que receba outro comando, o disco se manterá sempre a 1,5m de distância do mago. Quando o efeito da magia acaba, o dis-co simplesmente desaparece, derruban-do tudo o que estava sobre ele. O disco também desaparece quando a distância entre ele e o mago for superior ao alcan-ce da magia ou quando existir uma dis-tância superior a 1 metro entre ele e o chão sobre o qual paira.',
      stats: [
        'Arcana 1',
        'Alcance: 50m + 1,5m/2 níveis',
        'Duração: 1 hora/nível',
      ],
    },
    {
      name: 'Enfeitiçar pessoas',
      description:
        'Esta  magia  afeta  humanoides  vivos médios  ou  pequenos.  O  alvo  passa  a considerar  o  mago  um  amigo  respei-tável e confiável, obedecendo todas as suas  ordens,  desde  que  não  possuam clara ameaça a sua integridade.Ordens como atacar serão sempre se-guidas, mesmo que o alvo a ser atacado seja infinitamente mais poderoso que o alvo da magia.Um sucesso em uma jogada de prote-ção modificada pela Sabedoria nega o efeito desta magia. Se a criatura enfei-tiçada for ferida, ela tem direito a uma nova jogada de proteção.',
      stats: [
        'Arcana  1',
        'Alcance:  especial  (ver  texto)',
        'Duração: 1 hora + 10 minutos/nível',
        'Jogada de proteção: JP+SAB nega',
      ],
    },
    {
      name: 'Escudo arcano',
      description:
        'O  mago  invoca  um  escudo  invisível que  o  protege  de  ataques  físicos,  se-jam  projéteis  e  outros  ataques  à  dis-tância,  ou  corpo-a-corpo.  O  escudo arcano equivale a uma armadura com bônus  de  +4,  e  absorve  totalmente  o dano causado por mísseis mágicos. Se a classe de armadura do mago já for superior  à  fornecida  por  esta  magia, esta não causa efeito, a não ser no que diz  respeito  à  absorção  do  dano  dos mísseis mágicos.',
      stats: [
        'Arcana 1',
        'Alcance: pessoal',
        'Duração: 1d4 turnos + 1 turno/nível',
      ],
    },
    {
      name: 'Expandir/Encolher',
      description:
        'Com  esta  magia  o  mago  consegue  au-mentar ou encolher imediatamente o ta-manho de uma pessoa em até 5% do ta-manho original para cada nível de mago.',
      stats: [
        'Arcana  1',
        'Alcance:  toque',
        'Duração:  1d6 turnos + 1 turno/nível',
      ],
    },
    {
      name: 'Ilusão',
      description:
        'Enquanto  mantiver  sua  concentração, o mago consegue criar a ilusão de uma criatura  poderosa  que  consegue  afetar e causar dano efetivo nos alvos que não forem  bem-sucedidos  a  uma  jogada  de proteção  modificada  pela  Sabedoria. A ilusão possui CA 11 e só desaparece quando o mago desejar, se for dissipada ou atacada com sucesso.',
      stats: [
        'Arcana  1',
        'Alcance:  especial  (ver  texto)',
        'Duração:  especial  (ver  texto)',
        'Jogada  de proteção: JP+SAB nega',
      ],
    },
    {
      name: 'Ler idiomas',
      description:
        'Esta magia permite que o mago deci-fre direções, instruções e fórmulas em idiomas desconhecidos a ele. Ela é par-ticularmente útil para mapas de tesou-ro, muito embora não decifre nenhum enigma ou código, apenas permite que o  mago  consiga  compreender  o  que está escrito',
      stats: [
        'Arcana 1',
        'Alcance: pessoal',
        'Duração: 10 minutos + 1 minuto/nível',
      ],
    },
    {
      name: 'Ler magias',
      description:
        'Esta magia permite que o mago decifre inscrições mágicas em objetos como li-vros, pergaminhos, armas, etc. Apesar desta magia não servir para identificar propriedades mágicas em itens, ela dá ao  mago  a  capacidade  de  identificar, por  exemplo,  uma  escrita  mágica  na lâmina de uma espada, ou palavras de proteção gravadas na capa de um gri-mório escondido.No caso dos pergaminhos, esta magia não  é  necessária  para  lançar  a  ma-gia contida nele, mas sim para que o mago saiba qual magia está gravada em um determinado pergaminho.',
      stats: [
        'Arcana 1',
        'Alcance: pessoal',
        'Duração: 1 hora + 10 minutos/nível',
      ],
    },
    {
      name: 'Luz',
      description:
        'O objeto alvo produz luz tão brilhante quanto uma tocha, que ilumina uma área com raio de 6 metros por 1 hora+10 minutos/nível. Se memorizada como uma magia de 2º círculo, a luz emite o brilho enquanto o personagem desejar.',
      stats: [
        'Divina 1, 2, Arcana 1, 2',
        'Alcance: toque',
        'Duração: especial (ver texto)',
      ],
    },
    {
      name: 'Mãos flamejantes',
      description:
        'Ao  formar  um  leque  com  as  mãos,  o mago  dispara  um  raio  triangular  que afeta  todas  as  criaturas  que  estejam  a até  3  metros  do  mago.  Cada  criatura atingida recebe 1d3 pontos de dano +2 por nível até um máximo de +20. Uma jogada  de  proteção  modificada  pela Destreza reduz o dano pela metade.',
      stats: [
        'Arcana 1',
        'Alcance: raio de 3 metros + 1 me-tro/nível',
        'Duração: instantânea',
        'Jogada de proteção: JP+DES reduz o dano pela metade',
      ],
    },
    {
      name: 'Mensagem',
      description:
        'O personagem pode escolher 1 alvo a cada 3 níveis para sussurrar uma men-sagem e receber uma resposta sem que as  outras  criaturas  fora  do  efeito  per-cebam.  É  preciso  que  todos  os  alvos compreendam  o  idioma  falado  e  que não  haja  nenhum  obstáculo  físico  ou mágico que atrapalhe a comunicação.',
      stats: [
        'Arcana 1, Divina 2',
        'Alcance: raio de 10 metros + 3 metros/nível',
        'Duração: 1d6 turnos + 1 turno/nível',
      ],
    },
    {
      name: 'Mísseis mágicos',
      description:
        'Um  míssil  mágico  voa  para  onde  o mago  direcionar,  acertando  automa-ticamente. Para que uma criatura seja atingida  pelo  míssil  mágico,  é  preciso que ele esteja na linha de visão do mago. Um mago pode lançar 1 míssil mági-co  a  cada  3  níveis,  e  o  dano  causado é  de  1d4  pontos  +1  por  nível,  até  um máximo  de  +5.  Assim,  no  4º  nível  o mago conjura 2 mísseis, no 7º conjura 3 mísseis, no 10º conjura 4 mísseis, no 13º conjura 5 mísseis, no 16º conjura 6 mísseis e no 19º conjura 7 mísseis. Esses mísseis adicionais podem ser di-recionados  para  alvos  distintos  desde que a distância entre eles não ultrapas-se 18 metros.',
      stats: [
        'Arcana 1',
        'Alcance: raio de 10 metros + 3 metros/nível',
        'Duração: instantânea',
      ],
    },
    {
      name: 'Patas de aranha',
      description:
        'Esta  magia  permite  ao  alvo  andar sobre as paredes ou tetos como se este fosse um piso horizontal. Os efeitos da gravidade ainda são sentidos pelo alvo, portanto objetos soltos, nos bolsos ou na roupa do alvo podem se desprender e cair normalmente.',
      stats: [
        'Arcana 1',
        'Alcance: toque',
        'Duração: 1d6 turnos + 1 turno/nível',
      ],
    },
    {
      name: 'Proteção contra alinhamento',
      description:
        'Esta magia cria uma barreira mágica invisível  ao  redor  do  personagem,  o protegendo de qualquer ataque reali-zado  por  uma  criatura/fonte  caótica ou ordeira. Os ataques físicos recebem uma  penalidade  de  -2.  A  proteção confere 25% de resistência à magia ao personagem.Se  preparada  como  uma  magia  de terceiro círculo, ao invés de proteger apenas  o  personagem  que  lançou  a magia,  protege  todos  os  aliados  em uma área de 9 metros de raio ao seu redor. Neste caso, ela pode ser utiliza-da não só como uma forma de prote-ção, mas também para prender em seu interior uma criatura de determinado alinhamento  por  24  horas  por  nível. Uma  criatura  aprisionada  que  tenha resistência à magia pode testar a sua resistência  uma  vez  ao  dia.  Em  caso de  sucesso,  consegue  transpassar  a barreira mágica.',
      stats: [
        'Arcana 1, 3, Divina 1, 3',
        'Alcance: pessoal',
        'Duração:  1d6  turnos  +  1  turno/nível',
        'RM: Sim',
      ],
    },
    {
      name: 'Salto',
      description:
        'O alvo desta magia ganha a habilidade de  dar  um  salto  por  turno.  Esse  salto pode ser de até 10 metros, que podem ser  divididos  entre  altura  e  distância. Assim, é possível saltar 10 metros para cima ou 5 metros para frente e 5 para cima. Saltos para trás consomem o do-bro em metros do limite da magia, as-sim para saltar pra trás o alvo consegue saltar  apenas  3  metros  pra  trás  e  dois metros para cima ou vice-versa.',
      stats: [
        'Arcana 1',
        'Alcance: toque',
        'Duração: 1d4 turnos + 1 turno/nível',
      ],
    },
    {
      name: 'Servo invisível',
      description:
        'Esta  magia  cria  um  pequeno  serviçal etéreo que ajuda o mago em pequenas atividades como trazer coisas, carregar objetos, auxiliar na limpeza, etc.',
      stats: [
        'Arcana 1',
        'Alcance: 3 metros + 1 metro/nível',
        'Duração: 1 hora + 10 minutos/nível',
      ],
    },
    {
      name: 'Sono',
      description:
        'Esta  magia  coloca  inimigos  em  um sono encantado, sem direito a uma jo-gada  de  proteção.  Ela  afeta  criaturas baseada  em  seus  dados  de  vida  (para monstros) ou níveis (para personagens). Esta magia afeta 1d4+1 dados de vida ou níveis para cada 5 níveis do mago. As primeiras criaturas afetadas são sempre as mais próximas do mago, desde que estejam dentro do alcance da magia.',
      stats: [
        'Arcana 1',
        'Alcance: raio de 3 metros + 1 metro/nível',
        'Duração: 10 minutos + 1 minuto/nível',
      ],
    },
    {
      name: 'Toque chocante',
      description:
        'O mago cria uma luva mágica de ele-tricidade em sua mão que causa dolo-rosos  choques  na  criatura  tocada.  O choque  causa  1d8  pontos  de  dano  + 1d8 para cada 3 níveis do mago até um máximo de 10d8. Para tocar, é preciso fazer uma jogada de ataque de toque.',
      stats: [
        'Arcana 1',
        'Alcance: toque',
        'Duração: instantânea',
        'Ataque: ataque de toque',
      ],
    },
    {
      name: 'Ventriloquismo',
      description:
        'O mago faz com que qualquer som que ele consiga produzir com a boca e em qualquer  língua  que  o  conheça  seja transferido para outra pessoa ou objeto.',
      stats: [
        'Arcana 1',
        'Alcance: toque',
        'Duração: 1d6 turnos + 1 turno/nível',
      ],
    },
  ]
]

export default arcaneSpellBook;
