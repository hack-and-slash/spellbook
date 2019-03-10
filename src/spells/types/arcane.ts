import { Spell } from 'src/models/spell';

const arcaneSpellBook: Spell[][] = [
  [
    {
      name: 'Abrir/Trancar',
      description:
        'Esta magia pode ser utilizada para dois efeitos distintos: abrir o acesso a qual-quer instrumento ou objeto que esteja fechado, trancado ou emperrado; e fe-char um acesso pela duração da magia (ou até ser dissipada).Criaturas com resistência a magia po-dem destrancar um objeto fechado por esta magia.',
      stats: ['Arcana 1', 'Alcance: toque', 'Duração: permanente'],
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
      stats: ['Arcana 1', 'Alcance: toque', 'Duração: permanente'],
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
  ],
  [
    {
      name: 'Aterrorizar',
      description:
        'Todas as criaturas com menos de 5 dados de vida e que estejam no raio de B alcance da magia ficarão automaticamente aterrorizadas caso falhem em uma jogada de proteção modificada pela Sabedoria. Criaturas aterrorizadas sofrem com o medo, tremendo descontroladamente e recebendo uma penalidade de -2 em todas as suas jogadas, sofrendo ainda com uma chance de 5% por nível do mago de soltar quaisquer objetos que estejam segurando.',
      stats: [
        'Arcana 2',
        'Alcance: raio de 10 metros + 3 metros/nível',
        'Duração: 1d6 turnos + 1 turno/nível',
        'Jogada de proteção: JP+SAB nega',
      ],
    },
    {
      name: 'Despedaçar',
      description:
        'Esta magia cria um ruído extremamente agudo, que quebra materiais a até 1,5 m de distância do ponto em que a magia foi lançada. Vidros, cristais, porcelanas, cerâmicas e materiais semelhantes podem ser quebrados com esta magia. ',
      stats: [
        'Arcana 2',
        'Alcance: especial (ver texto)',
        'Duração: instantânea',
      ],
    },
    {
      name: 'Detectar alinhamento',
      description:
        'Esta magia possibilita ao personagem que se concentrar por um turno inteiro detectar a aura de uma pessoa ou objeto, determinando assim o seu alinhamento. Alinhamentos magicamente ocultos se revelarão sempre como neutros.',
      stats: [
        'Divina 1, Arcana 2',
        'Alcance: raio de 10 metros + 3 metros/nível',
        'Duração: 1d6 turnos + 1 turno/nível',
      ],
    },
    {
      name: 'Detectar invisibilidade',
      description:
        'O mago consegue detectar objetos e criaturas invisíveis, como se fossem normalmente visíveis.',
      stats: [
        'Arcana 2',
        'Alcance: raio de 10 metros + 3 metros/nível',
        'Duração: 1d6 turnos + 1 turno/nível',
      ],
    },
    {
      name: 'Escuridão',
      description:
        'Esta magia cria uma área de escuridão que é impenetrável até mesmo para a visão no escuro. As magias Luz ou Dissipar magia podem ser utilizadas para cancelar a Escuridão.',
      stats: [
        'Arcana 2',
        'Alcance: raio de 10 metros + 3 metros/nível',
        'Duração: 1d6 turnos + 1 turno/nível',
      ],
    },
    {
      name: 'Esfera flamejante',
      description:
        'O mago cria uma esfera de chamas rastejante que se move até 10 metros por turno, de acordo com o seu comando. A esfera causa 2d6 pontos de dano em qualquer alvo que estiver dentro dela e 1d6 pontos de dano em qualquer alvo que fique a até 1,5 metros da esfera. Cabe ao mago direcionar a esfera, do contrário ela ficará paralisada até o término da duração da magia.',
      stats: [
        'Arcana 2',
        'Alcance: raio de 3 metros + 1 metro/nível',
        'Duração: 1d4 turnos + 1 turno/nível',
      ],
    },
    {
      name: 'Força arcana',
      description:
        'Esta magia pode ser conjurada em qualquer alvo vivo com Força maior ou igual a 1. Pela duração da magia, o alvo recebe 1 ponto extra para cada 5 pontos de Força que já possua. Assim, um homem de armas com Força 16 teria seu atributo aumentado para 19, enquanto um mago com Força 9 teria seu atributo aumentado para 10. O cálculo deve ser sempre realizado com o valor original da Força do personagem, sem levar em conta outras magias, itens mágicos ou demais efeitos que ampliem o valor do atributo original.',
      stats: [
        'Arcana 2',
        'Alcance: toque',
        'Duração: 1d6 turnos + 1 turno/nível',
      ],
    },
    {
      name: 'Invisibilidade',
      description:
        'O alvo desta magia, seja este uma pessoa ou objeto, se torna totalmente invisível. Uma criatura invisível não pode ser atacada, a menos que sua localização aproximada seja conhecida, e esses ataques recebem ainda uma penalidade de -10. A magia é dissipada se o alvo invisível realizar qualquer tipo de ataque ou lançar uma magia. Se preparada como uma magia de 3o círculo, a magia torna invisível todas as criaturas e objetos em uma área de 3 metros de diâmetro.',
      stats: [
        'Arcana 2, 3',
        'Alcance: toque',
        'Duração: 1d6 turnos + 1 turno/nível',
      ],
    },
    {
      name: 'Levitação',
      description:
        'Com esta magia, o mago é capaz de se mover em uma linha reta vertical. Esta magia necessita apenas de uma palavra para ser ativada, podendo ser evocada em qualquer situação, até mesmo durante uma queda.',
      stats: [
        'Arcana 2',
        'Alcance: pessoal',
        'Duração: 1d6',
        'turnos + 1 turno/nível',
      ],
    },
    {
      name: 'Localizar objetos',
      description:
        'Esta magia dá ao mago a direção correta (como o voo de um corvo) até um objeto do tipo que especificar na descrição. O objeto não pode ser algo que o mago nunca viu, apesar de que a magia pode detectar um objeto em uma classe geral de itens conhecidos do mago: cadeiras, ouro, etc., mas com uma precisão ainda menor.',
      stats: [
        'Arcana 2',
        'Alcance: raio de 10 metros + 3 metros/nível',
        'Duração: instantânea',
      ],
    },
    {
      name: 'Névoa fétida',
      description:
        'O mago cria uma densa nuvem esverdeada de odor repulsivo e repugnante. Todos dentro da área de efeito de 3 m3 devem fazer uma jogada de proteção modificada pela Constituição ou cairão nauseados por 1d4 turnos. Um alvo nauseado perde toda a sua Destreza na CA e recebe uma penalidade de -2 nos ataques.',
      stats: [
        'Arcana 2',
        'Alcance: raio de 10 metros + 3 metros/nível',
        'Duração: 1d6 turnos + 1 turno/nível',
        'Jogada de proteção: JP+CON nega',
      ],
    },
    {
      name: 'Raio de enfraquecimento',
      description:
        'Esta magia reduz magicamente a Força de um alvo em 10 pontos até o limite de 3. Todas as habilidades que fazem uso de Força, como carga, ataques e danos são prejudicadas até que o efeito da magia acabe.',
      stats: [
        'Arcana 2,',
        'Alcance: toque,',
        'Duração: 1d4 turnos + 1 turno/nível',
      ],
    },
    {
      name: 'P.E.S. (Percepção Extra Sensorial)',
      description:
        'O mago pode detectar os pensamentos de outros seres a uma distância máxima de 18 metros. A magia não pode penetrar mais de 60 centímetros de pedra e é bloqueada até mesmo pela mais fina folha de chumbo. Esta percepção faz com que o mago compreenda qualquer pensamento como se lhe fosse dito em voz alta, desde que o mago compartilhe o mesmo idioma que o alvo da magia. ',
      stats: [
        'Arcana 2',
        'Alcance: raio de 10 metros + 3 metros/nível',
        'Duração: 1 hora + 10 minutos/nível',
      ],
    },
    {
      name: 'Reflexos',
      description:
        'A magia cria 1d4+1 reflexos do mago, que, como espelhos, agem em perfeita sincronia com ele. Os atacantes não podem distinguir os reflexos do original e podem atacar uma das imagens ao invés do mago verdadeiro. Em caso de sucesso no ataque, haverá 50% de chance do alvo atingido ser o reflexo. Caso o ataque seja direcionado a uma área em que estejam tanto o mago quanto o seu reflexo, essa jogada é dispensada. Um reflexo atingido é imediatamente dissipado.',
      stats: [
        'Arcana 2',
        'Alcance: pessoal',
        'Duração: 1d6 turnos + 1 turno/nível',
      ],
    },
    {
      name: 'Resistir energia',
      description:
        'Esta magia confere ao alvo proteção limitada contra um tipo específico de energia (ácido, frio, eletricidade, fogo ou sônico). O alvo recebe resistência 10 contra o tipo de energia selecionada, significando que, ao sofrer dano daquela energia, sofrerá o dano -10. O valor da resistência passa para 20 no 7o nível e para 30 no 11o. A magia também protege o equipamento do alvo. A resistência absorve apenas o dano. Outras penalidades oriundas da energia se aplicam normalmente.',
      stats: [
        'Arcana 2, Divina 2',
        'Alcance: toque',
        'Duração: 10 minutos/nível',
      ],
    },
    {
      name: 'Teia',
      description:
        'Teias fibrosas e grudentas preenchem umaáreadeaté3x3x6metros,tornando essa área extremamente difícil de ser atravessada. A movimentação na área afetada é reduzida a 1/3, ocasionando uma penalidade de -2 na CA e nas jogadas de proteção modificadas pela Destreza.',
      stats: [
        'Arcana 2',
        'Alcance: raio de 3 metros + 1 metro/nível',
        'Duração: 1 hora + 10 minutos/nível',
      ],
    },
    {
      name: 'Ver invisibilidade',
      description:
        'Com esta magia o mago consegue enxergar normalmente objetos e criaturas que estão invisíveis, desde que estejam em sua linha de visão. Essas criaturas aparecem de forma translúcida, possibilitando ao mago discernir quais são visíveis, quais estão invisíveis e quais são etéreas. A magia não revela como a criatura se tornou invisível, nem revela ilusões.',
      stats: ['Arcana 2 e 3', 'Alcance: pessoal', 'Duração: 10 minutos/nível'],
    },
  ],
  [
    { name: 'Bola de fogo', description: '', stats: [] },
    { name: 'Deslocamento', description: '', stats: [] },
    { name: 'Dissipar magia', description: '', stats: [] },
    { name: 'Flecha de chamas ', description: '', stats: [] },
    { name: 'Forma espectral ', description: '', stats: [] },
    { name: 'Imobilizar pessoas', description: '', stats: [] },
    { name: 'Invisibilidade ', description: '', stats: [] },
    { name: 'Invocar criaturas ', description: '', stats: [] },
    { name: 'Lentidão', description: '', stats: [] },
    { name: 'Morte aparente ', description: '', stats: [] },
    { name: 'Piscar', description: '', stats: [] },
    { name: 'Proteção contra projéteis', description: '', stats: [] },
    { name: 'Relâmpago', description: '', stats: [] },
    { name: 'Runas explosivas ', description: '', stats: [] },
    { name: 'Sugestão', description: '', stats: [] },
    { name: 'Toque vampírico ', description: '', stats: [] },
    { name: 'Velocidade', description: '', stats: [] },
    { name: 'Voo', description: '', stats: [] },
  ],
  [
    { name: 'Arma encantada', description: '', stats: [] },
    { name: 'Armadilha de fogo ', description: '', stats: [] },
    { name: 'Círculo tentacular ', description: '', stats: [] },
    { name: 'Confusão', description: '', stats: [] },
    { name: 'Drenar vida', description: '', stats: [] },
    { name: 'Escudo de fogo', description: '', stats: [] },
    { name: 'Extensão', description: '', stats: [] },
    { name: 'Liberdade de movimento ', description: '', stats: [] },
    { name: 'Medo', description: '', stats: [] },
    { name: 'Metamorfose', description: '', stats: [] },
    { name: 'Muralha de fogo', description: '', stats: [] },
    { name: 'Muralha de gelo', description: '', stats: [] },
    { name: 'Muralha de pedra ', description: '', stats: [] },
    { name: 'Olho arcano', description: '', stats: [] },
    { name: 'Porta dimensional ', description: '', stats: [] },
    { name: 'Tempestade glacial ', description: '', stats: [] },
    { name: 'Veneno', description: '', stats: [] },
  ],
  [
    { name: 'Baú secreto', description: '', stats: [] },
    { name: 'Cone de gelo', description: '', stats: [] },
    { name: 'Criar passagens', description: '', stats: [] },
    { name: 'Enfraquecer o intelecto ', description: '', stats: [] },
    { name: 'Imobilizar monstros', description: '', stats: [] },
    { name: 'Mão interveniente', description: '', stats: [] },
    { name: 'Moldar rochas', description: '', stats: [] },
    { name: 'Muralha de energia', description: '', stats: [] },
    { name: 'Muralha de ferro', description: '', stats: [] },
    { name: 'Quebrar encantamento', description: '', stats: [] },
    { name: 'Reanimar mortos ', description: '', stats: [] },
    { name: 'Névoa mortal', description: '', stats: [] },
    { name: 'Telecinésia', description: '', stats: [] },
    { name: 'Teleporte', description: '', stats: [] },
    { name: 'Transformação maldita', description: '', stats: [] },
  ],
  [
    { name: 'Concha antimagia ', description: '', stats: [] },
    { name: 'Controlar o clima ', description: '', stats: [] },
    { name: 'Desintegrar', description: '', stats: [] },
    { name: 'Encantar item', description: '', stats: [] },
    { name: 'Esfera gélida', description: '', stats: [] },
    { name: 'Globo de invulnerabilidade ', description: '', stats: [] },
    { name: 'Magia da morte', description: '', stats: [] },
    { name: 'Mover a terra', description: '', stats: [] },
    { name: 'Proteção', description: '', stats: [] },
    { name: 'Reencarnação ', description: '', stats: [] },
    { name: 'Visão da verdade', description: '', stats: [] },
  ],
  [
    { name: 'Palavra de poder: atordoar ', description: '', stats: [] },
    { name: 'Passagem invisível', description: '', stats: [] },
    { name: 'Rebater magia', description: '', stats: [] },
    { name: 'Reverter gravidade', description: '', stats: [] },
    { name: 'Simulacro ', description: '', stats: [] },
    { name: 'Visão', description: '', stats: [] },
  ],
  [
    { name: 'Aprisionar alma', description: '', stats: [] },
    { name: 'Clone', description: '', stats: [] },
    { name: 'Imunidade à magia ', description: '', stats: [] },
    { name: 'Labirinto', description: '', stats: [] },
    { name: 'Limpar a mente', description: '', stats: [] },
    { name: 'Metamorfosear objetos ', description: '', stats: [] },
    { name: 'Nuvem incendiária', description: '', stats: [] },
    { name: 'Palavra de poder: cegar', description: '', stats: [] },
    { name: 'Permanência ', description: '', stats: [] },
    { name: 'Símbolo', description: '', stats: [] },
  ],
  [
    { name: 'Aprisionamento', description: '', stats: [] },
    { name: 'Chuva de meteoros ', description: '', stats: [] },
    { name: 'Desejo', description: '', stats: [] },
    { name: 'Esfera prismática ', description: '', stats: [] },
    { name: 'Êxtase temporal ', description: '', stats: [] },
    { name: 'Magia astral', description: '', stats: [] },
    { name: 'Palavra de poder: matar ', description: '', stats: [] },
    { name: 'Parar o tempo', description: '', stats: [] },
    { name: 'Portal', description: '', stats: [] },
  ],
];

export default arcaneSpellBook;
