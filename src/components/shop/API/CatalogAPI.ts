import peelMindal from './imgAPI/peelMindal.jpg';
import peelLactic from './imgAPI/peelLactic.jpg';
import peelLight from './imgAPI/peelLight.jpg';
import peelGlycolic from './imgAPI/peelGlycolic.jpg';
import peelNeutralizer from './imgAPI/peelNeutralizer.jpg';
import postPeelSkvalanovoeMaslo from './imgAPI/postPeelSkvalanovoeMaslo.jpg';
import postPeelSyvorotkaGK from './imgAPI/postPeelSyvorotkaGK.jpg';
import spf from './imgAPI/spf.jpg';
import AHA from './imgAPI/AHA.jpg';
import gel from './imgAPI/Gel.jpg';
import milk from './imgAPI/cleansingMilk.jpg';
import sensitiveToner from './imgAPI/sensitiveToner.jpg';
import sensitiveCream from './imgAPI/sensitiveCream.jpg';
import oilyToner from './imgAPI/oilyToner.jpg';
import oilyCrem from './imgAPI/oilyCream.jpg';
import normalToner from './imgAPI/normalToner.jpg';
import normalCream from './imgAPI/normalCream.jpg';
import postPeelGidrotantCrem from './imgAPI/postPeelgidrotantKrem.jpg';

const catalogs: {
    id: number,
    value: string | string[],
    src: HTMLImageElement | File | string | undefined | any,
    title: string,
    price: number,
    count: 1,
    p: string,
    description: string[],
}[] = [
        {
            id: 0,
            value: 'peel',
            src: peelMindal,
            title: '60 мл. Миндальный пилинг – Almond Acid pH 1,3. 30% миндальная + 15% молочная кислота',
            price: 3330,
            count: 1,
            p: 'Показания для применения: морщины, изменения рельефа кожи, акне, пост-акне, фолликулит, комедоны, дряблость кожи, пигментные пятна, расширенность пор.',
            description: ['Пилинг предназначен для омоложения кожи лица. Устраняет дефекты жирной кожи, борется с фотостарением, гиперпигментацией и ворастным гиперкератозом. Уменьшает мимические морщины, восстанавливает тонус и эластичность кожи. Входящая в состав пилинга молочная кислота усиливает действие миндальной кислоты и дополняет препарат отбеливающим и отшелушивающим действием.', 'Эффекты миндальной кислоты:', 'Отшелушивающее действие. Выравнивание рельефа и цвета кожи, уменьшение глубины морщин. Нормализация гидро - липидного барьера кожи. Стимуляции продукции гликозаминогликанов, коллагена и эластина в дерме.', 'Показания для применения:', 'морщины, изменения рельефа кожи, акне, пост - акне, фолликулит, комедоны, дряблость кожи, пигментные пятна, расширенность пор.', 'pH 1,3 , 30% миндальная + 15% молочная кислота. Интенсивное отшелушевающее средство для кожи с гиперкератозом, с гиперпигментацией, обладает противовоспалительной активностью, нормализует деятельность сальных желез.'],
        },
        {
            id: 1,
            value: 'peel',
            src: peelLactic,
            title: '60 мл. Молочный пилинг с аргинином 40% гель. / Lactic Acid 40% Gel LA+L-arginine',
            price: 2000,
            count: 1,
            p: 'Молочная кислота относится к фруктовым (AHA) кислотам и является физиологичной, то есть родственной организму. Входит в состав NMF — натурального увлажняющего фактора кожи. Молочный пилинг мягко снижает синтез меланина и подходит женщинам с любым фото- типом. При курсовом применении активизирует выработку эластина и коллагена, повышает упругость и гладкость кожи, помогает сокра- тить мимические морщины.',
            description: ['Сочетание молочной кислоты и аргинина – мощный, но деликатный тандем, обладающий отшелушивающими свойствами, активирующий клеточную регенерацию без зуда и жжения. Повышается стимуляция клеточной регенерации, ускоряется выравнивание микрорельефа кожи, улучшаются результаты в борьбе с гиперпигментацией. Действие аргинина, при проведении поверхностного пилинга, заключается в очень медленном прохождении молекул молочной кислоты через верхние слои кожи.', 'Аргинин – аминокислота с универсальными свойствами: принимает участие в синтезе коллагена, служит строительным материалом для белков, благотворно влияет на стенки сосудов, выравнивает тон лица и активирует микроциркуляцию, естественным образом тормозит процессы старения кожи, справляется даже с глубокими морщинами, обладает ранозаживляющим и регенеративным действием, благодаря омолаживающему свойству, аргинин борется с мимическими морщинами вокруг глаз, хорошо справляется с нарушениями пигментации кожи', 'Объем: 60 мл.; Ph – 2.2'],
        },
        {
            id: 2,
            value: 'peel',
            src: peelLight,
            title: 'Легкий пилинг Light Peel рН 1,5 раствор 60 мл.',
            price: 1412,
            count: 1,
            p: 'Легкий пилинг Light Peel – лаконичный пилинговый раствор, состоящий из гликолевой (20%) и салициловой (2%) кислот.',
            description: ['Light Peel оказывает легкое эксфолиирующее действие. Салициловая кислота низкой концентрации не дает выраженного отшелушивающего эффекта, но значительно облегчает проникновение гликолевой кислоты в глубокие слои дермы, где она оказывает стимулирующее действие на работу фибробластов. В результате повышается сопротивляемость кожи к воздействию агрессивных факторов, выравнивается рельеф кожи, уплотняется дермальный слой.', 'Эффекты Light Peel:', 'Light Peel оказывает легкое эксфолиирующее действие. Салициловая кислота низкой концентрации не дает выраженного отшелушивающего эффекта, но значительно облегчает проникновение гликолевой кислоты в глубокие слои дермы, где она оказывает стимулирующее действие на работу фибробластов. В результате повышается сопротивляемость кожи к воздействию агрессивных факторов, улучшается состояние микроциркуляторного русла, выравнивается рельеф кожи, утолщается дермальный слой.', 'Легкий пилинг Light Peel может использоваться:', 'для возрастной кожи любого типа (нормальной, сухой, или жирной); при гиперкератозе; как нежный пилинг деликатной зоны вокруг глаз; для кожи с проявлениями купероза; при активной форме акне (2-3 ст); при себорее; как предпилинговый раствор при выполнении срединных пилингов, так как любые повреждения эпидермиса, не видимые глазу, становятся очевидными.'],
        },
        {
            id: 3,
            value: 'peel',
            src: peelGlycolic,
            title: 'Гликолевый пилинг Гель – Glycolic Acid Gel pH 2,0 30% / 60мл.',
            price: 1284,
            count: 1,
            p: 'Показания для применения: увядающая кожа, морщины, фотостарение, сниженный тургор, дряблость кожи, дефекты рельефа кожи.',
            description: ['Гликолевая кислота относится к разряду фруктовых, или альфа-гидроксильных, кислот (AHA). Наряду с прочими AHA, она активно обновляет кожу, запуская процесс отшелушивания клеток (эксфолиацию). Однако именно у гликолевой кислоты есть особенности – невысокая молекулярная масса и низкая кислотность.', '60 мл. / pH 2,0 30%  гель', 'Это легкое отшелушевающее средство на основе 30 % гликолевой кислоты стимулирует синтез коллагена. Рекомендуется для кожи с первыми признаками увядания или в качестве предпилинговой подготовки.', 'Эффекты Гликолевой кислоты:', 'Ослабление межклеточных связей в роговом слое эпидермиса; Нормализация гидро-липидного барьера кожи; Стимуляции продукции гликозаминогликанов, коллагена и эластина в дерме; Стимуляция пролиферативных процессов в пределах эпидермиса и дермы; Выравнивание рельефа и цвета кожи; Уменьшение глубины морщин. Показания для применения: увядающая кожа, морщины, фотостарение, сниженный тургор, дряблость кожи, дефекты рельефа кожи.'],
        },
        {
            id: 4,
            value: 'peel',
            src: peelNeutralizer,
            title: 'Нейтрализующий раствор – Neutralizer Solution 200 мл.',
            price: 845,
            count: 1,
            p: 'Представляет собой раствор, используется для быстрого прекращения действия кислоты.',
            description: ['Нейтрализующий раствор используется согласно протоколу процедур для нейтрализации AHA кислот.'],
        },

        {
            id: 5,
            value: 'postPeel',
            src: postPeelGidrotantCrem,
            title: 'Крем гидротант с гиалуроновой кислотой – Hydrotant Cream With Hyaluronic Acid',
            price: 2424,
            count: 1,
            p: 'Средство поможет восстановить гидробаланс кожи, защитить ее от потери влаги.',
            description: ['Завершая процедуру пилингов, важно восстановить гидробаланс кожи и защитить ее от потери влаги. Включение биопептида морских водорослей в сочетании с гиалуроновой кислотой и скваланом окажет активное антиоксидантное действие, натуральные масла абрикоса и жожоба быстро восстановят гидролипидную мантию кожи. Подходит для нормальной и сухой кожи.'],
        },
        {
            id: 6,
            value: 'postPeel',
            src: postPeelSkvalanovoeMaslo,
            title: '60мл. Восстанавливающее сквалановое масло – Restoring Squalane Oil',
            price: 1840,
            count: 1,
            p: 'Сквален входит в состав кожного сала, обеспечивая ее барьерные защитные свойства.',
            description: ['Сквален входит в состав кожного сала, обеспечивая ее барьерные защитные свойства. Используя несколько капель восстанавливающего скваланового масла после процедуры химического пилинга кожа получает дополнительную защиту, быстрее регенерирует, насыщается кислородом, увлажняется. Восстанавливается естественный липидный барьер кожи. Сквалановое масло обладает антимикробным действием.'],
        },
        {
            id: 7,
            value: 'postPeel',
            src: postPeelSyvorotkaGK,
            title: 'Сыворотка c гиалуроновой кислотой – Pure Hyaluronic Serum 100%',
            price: 1134,
            count: 1,
            p: 'Восстанавливает гидро-липидную мантию эпидермиса.',
            description: ['Гиалуроновая кислота – основной компонент кожи и важная составляющая ежедневного ухода. Низкомолекулярная гиалуроновая кислота не только эффективно увлажняет эпидермис и профилактирует трансэпидермальную потерю воды. При использовании в постпилинговом периоде стимулирует репаративные процессы и снимает воспаление.'],
        },
        {
            id: 8,
            value: 'postPeel',
            src: spf,
            title: 'Антивозрастной увлажняющий солнцезащитный крем 30+ – Anti age + Moisturizing SPF 30',
            price: 1000,
            count: 1,
            p: 'Защищает кожу от избыточного УФО, восстанавливает липидный барьер эпидермиса, увлажняет и питает клетки кожи',
            description: ['В рецептуру крема наряду с физическими и химическими фотофильтрами вошли натуральные растительные ингредиенты, витамины, питательные вещества, антиоксиданты. Такое сочетание компонентов защищает кожу от избыточного УФО, восстанавливает липидный барьер эпидермиса, увлажняет и питает клетки кожи, оказывает противовоспалительное и тонизирующее действие.'],
        },
        {
            id: 9,
            value: ['postPeel', 'cleansing'],
            src: AHA,
            title: '200мл. AHA гель для глубокого очищения – АНА Deep Cleansing Gel',
            price: 1000,
            count: 1,
            p: 'Вписывается в программы химических пилингов PeelMedical и профессиональные уходы лечения проблемной кожи.',
            description: ['Очищающий гель содержит альфа – и бета-гидроксикислоты. Это позволяет не только мягко очистить кожу и обезжирить кожу, но и подготовить ее к процедуре химического пилинга. За счет добавления салициловой кислоты оказывает себорегулирующее, противовоспалительное и антибактериальное действие. Прекрасно вписывается в программы химических пилингов PeelMedical и профессиональные уходы лечения проблемной кожи.'],
        },
        {
            id: 10,
            value: ['postPeel', 'bmc', 'cleansing', 'oily'],
            src: gel,
            title: '500мл. Очищающий гель – AHA Cleansing Gel',
            price: 1680,
            count: 1,
            p: 'Для тщательного очищения кожи любого типа от внешних загрязнений и макияжа.',
            description: ['Действие: щадящий очищающий гель на основе гликолевой кислоты, мягко удаляет загрязнения и избытки кожного сала с поверхности кожи. Обладает легким антисептическим и отшелушивающим действием. Благодаря алое вера и аллантоину, успокаивает кожу.', 'Активные ингредиенты: деионизированная вода, кокамид ДEA, натрия лаурет сульфат, пропиленгликоль, алоэ вера гель (алоэ барбаденсис сок листьев), экстракт арники, аллантоин, гликолевая кислота, отдушка.', 'Применение: Нанесите гель на влажные руки и распределите по коже лица. Выполните очищающий массаж с добавлением воды и смойте остатки геля и загрязнения влажными дисками или спонжами. Внимание! Не использовать продукт для кожи век и губ.', 'Объем: 500мл'],
        },
        {
            id: 11,
            value: ['postPeel', 'bmc', 'cleansing', 'oily'],
            src: gel,
            title: '150мл. Очищающий гель – AHA Cleansing Gel',
            price: 765,
            count: 1,
            p: 'Для тщательного очищения кожи любого типа от внешних загрязнений и макияжа.',
            description: ['Действие: щадящий очищающий гель на основе гликолевой кислоты, мягко удаляет загрязнения и избытки кожного сала с поверхности кожи. Обладает легким антисептическим и отшелушивающим действием. Благодаря алое вера и аллантоину, успокаивает кожу.', 'Активные ингредиенты: деионизированная вода, кокамид ДEA, натрия лаурет сульфат, пропиленгликоль, алоэ вера гель (алоэ барбаденсис сок листьев), экстракт арники, аллантоин, гликолевая кислота, отдушка.', 'Применение: Нанесите гель на влажные руки и распределите по коже лица. Выполните очищающий массаж с добавлением воды и смойте остатки геля и загрязнения влажными дисками или спонжами. Внимание! Не использовать продукт для кожи век и губ.', 'Объем: 150мл'],
        },
        {
            id: 12,
            value: ['bmc', 'cleansing', 'sensitive', 'normal'],
            src: milk,
            title: '500мл. Натуральное очищающее молочко/ Natural Cleansing Milk',
            price: 1460,
            count: 1,
            p: 'Нежное и деликатное косметическое молочко, мягко и качественно удаляет загрязнения и макияж с поверхности кожи. Увлажняет и смягчает кожу, придавая ей упругость и гладкость, активирует кровообращение. Для всех типов кожи.',
            description: ['Действие: Нежное и деликатное косметическое молочко, мягко и качественно удаляет загрязнения и макияж с поверхности кожи. Способствует улучшению клеточного дыхания и восстановлению барьерной функции кожи (алое вера и эхинацея). Продукт обладает противовоспалительным и антисептическим действием (экстракты ромашки и липы). Очищающее молочко увлажняет и смягчает кожу, придавая ей упругость и гладкость, а также активирует кровообращение (центелла игамамелис). Подходит для всех типов кожи.', 'Активные ингредиенты: гидрогенизированное оливковое масло, бетаин, мочевина, экстракт сапонарии лекарственной, глицерилстеарат, глицерин, гель алоэ вера, экстракт эхинацеи пурпурной, экстракт ромашки аптечной, экстракт календулы лекарственной, экстракт центеллы азиатской, экстракт мелиссы, экстракт гамамелисавирджинского, экстракт липы сердцевидной, экстракт розмарина.', 'Применение: Ватный диск с небольшим количеством молочка приложить к векам на 2-3 минуты. Затем бережно удалить тушь с ресниц. На кожу лица нанести 1-2 мл молочка, распределить легкими поглаживающими движениями и смыть влажными ватными дисками или спонжами. При необходимости процедуру повторить. Рекомендовано для всех типов кожи.', 'Объем: 500мл'],
        },
        {
            id: 13,
            value: ['bmc', 'cleansing', 'sensitive', 'normal'],
            src: milk,
            title: '150мл. Натуральное очищающее молочко/ Natural Cleansing Milk',
            price: 610,
            count: 1,
            p: 'Нежное и деликатное косметическое молочко, мягко и качественно удаляет загрязнения и макияж с поверхности кожи. Увлажняет и смягчает кожу, придавая ей упругость и гладкость, активирует кровообращение. Для всех типов кожи.',
            description: ['Действие: Нежное и деликатное косметическое молочко, мягко и качественно удаляет загрязнения и макияж с поверхности кожи. Способствует улучшению клеточного дыхания и восстановлению барьерной функции кожи (алое вера и эхинацея). Продукт обладает противовоспалительным и антисептическим действием (экстракты ромашки и липы). Очищающее молочко увлажняет и смягчает кожу, придавая ей упругость и гладкость, а также активирует кровообращение (центелла игамамелис). Подходит для всех типов кожи.', 'Активные ингредиенты: гидрогенизированное оливковое масло, бетаин, мочевина, экстракт сапонарии лекарственной, глицерилстеарат, глицерин, гель алоэ вера, экстракт эхинацеи пурпурной, экстракт ромашки аптечной, экстракт календулы лекарственной, экстракт центеллы азиатской, экстракт мелиссы, экстракт гамамелисавирджинского, экстракт липы сердцевидной, экстракт розмарина.', 'Применение: Ватный диск с небольшим количеством молочка приложить к векам на 2-3 минуты. Затем бережно удалить тушь с ресниц. На кожу лица нанести 1-2 мл молочка, распределить легкими поглаживающими движениями и смыть влажными ватными дисками или спонжами. При необходимости процедуру повторить. Рекомендовано для всех типов кожи.', 'Объем: 150мл'],
        },
        {
            id: 14,
            value: ['bmc', 'care', 'sensitive'],
            src: sensitiveToner,
            title: '500мл. Тоник для для чувствительной кожи / Rich Toner for sensitive skin',
            price: 1750,
            count: 1,
            p: 'Тоник для чувствительной кожи повышает уровень увлажнения кожи и мгновенно снимает ощущение стянутости. Успокаивает раздраженную кожу, поддерживает физиологический уровень pH, ревитализирует и освежает.',
            description: ['Обогащённый тоник для чувствительной кожи повышает уровень увлажнения кожи и мгновенно снимает ощущение стянутости. Тоник успокаивает раздраженную кожу, поддерживает физиологический уровень pH, ревитализирует и освежает. Сосудоукрепляющие ингредиенты (экстракт корня иглицы центелла азиатская, троксерутин, экстракт виноградных косточек экстракт плюща) способствуют профилактике купероза, укреплению стенок капилляров и уменьшают проявления покраснений, комплекс успокаивающих и восстанавливающих растительных компонентов (бетаин, экстракт гречихи, фосфолипиды, сфинголипиды, гиалуроновая кислота)', 'Применение: Распределить 1-2 мл тоника ватными дисками по массажным линиям.', 'Основные ингредиенты: Экстракт гречихи, фосфолипиды, сфинголипиды, бетаин, экстракт листьев камелии, экстракт конского каштана, экстракт корня рускуса остролистного, экстракт центеллы азиатской, троксерутин, экстракт листьев винограда, экстракт плюща, экстракт гречихи, гиалуронат натрия.', 'Объем: 500мл'],
        },
        {
            id: 15,
            value: ['bmc', 'care', 'sensitive'],
            src: sensitiveToner,
            title: '150мл. Тоник для для чувствительной кожи / Rich Toner for sensitive skin',
            price: 885,
            count: 1,
            p: 'Тоник для чувствительной кожи повышает уровень увлажнения кожи и мгновенно снимает ощущение стянутости. Успокаивает раздраженную кожу, поддерживает физиологический уровень pH, ревитализирует и освежает.',
            description: ['Обогащённый тоник для чувствительной кожи повышает уровень увлажнения кожи и мгновенно снимает ощущение стянутости. Тоник успокаивает раздраженную кожу, поддерживает физиологический уровень pH, ревитализирует и освежает. Сосудоукрепляющие ингредиенты (экстракт корня иглицы центелла азиатская, троксерутин, экстракт виноградных косточек экстракт плюща) способствуют профилактике купероза, укреплению стенок капилляров и уменьшают проявления покраснений, комплекс успокаивающих и восстанавливающих растительных компонентов (бетаин, экстракт гречихи, фосфолипиды, сфинголипиды, гиалуроновая кислота)', 'Применение: Распределить 1-2 мл тоника ватными дисками по массажным линиям.', 'Основные ингредиенты: Экстракт гречихи, фосфолипиды, сфинголипиды, бетаин, экстракт листьев камелии, экстракт конского каштана, экстракт корня рускуса остролистного, экстракт центеллы азиатской, троксерутин, экстракт листьев винограда, экстракт плюща, экстракт гречихи, гиалуронат натрия.', 'Объем: 150мл'],
        },
        {
            id: 16,
            value: ['bmc', 'care', 'sensitive'],
            src: sensitiveCream,
            title: '150мл. Восстанавливающий крем для чувствительной кожи/ Repairing Cream',
            price: 2530,
            count: 1,
            p: 'Устранение покраснения и раздражения кожи, повышения иммунитета, восстановлению собственной защиты. Защищает кожу от преждевременного старения.',
            description: ['Действие: комплекс растительных экстрактов направлен на устранение покраснения и раздражения кожи, повышения иммунитета, восстановлению собственной защиты (натурального увлажняющего фактора и гидролипидной мантии эпидермиса). Улучшение микроциркуляции и глубокое увлажнение создают наиболее благоприятные условия для чувствительной кожи. Специально разработанный комплекс защищает кожу от преждевременного старения.', 'Активные ингредиенты: вода, эфиры жирных кислот, фосфолипиды, сфинголипиды, изоамиллаурет, неионогенные ПАВы, бетаин, пропиленгликоль, гель алоэ вера, экстракт эхинацеи, ромашка аптечная, экстракт календулы, экстракт центеллы азиатской, экстракт мелиссы, экстракт гамамелиса, экстракт липы, мочевина, трипептид-1 меди, магния глюконат, водоросли, экстракт цикория, экстракт винограда, феноксиэтанол, натрия гидроксид, ЭДТА, гиалуроновая кислота, экстракт череды, экстракт арники, экстракт календулы, отдушка, метилтиазолинон, экстракт розмарина, карбоксиметилглюкан.', 'Применение: Нанести 1 мл крема на кожу и внедрить массажными движениями. Использовать 1-2 раза день.', 'Объем: 150мл'],
        },
        {
            id: 17,
            value: ['bmc', 'care', 'sensitive'],
            src: sensitiveCream,
            title: '50мл. Восстанавливающий крем для чувствительной кожи/ Repairing Cream',
            price: 1460,
            count: 1,
            p: 'Устранение покраснения и раздражения кожи, повышения иммунитета, восстановлению собственной защиты. Защищает кожу от преждевременного старения.',
            description: ['Действие: комплекс растительных экстрактов направлен на устранение покраснения и раздражения кожи, повышения иммунитета, восстановлению собственной защиты (натурального увлажняющего фактора и гидролипидной мантии эпидермиса). Улучшение микроциркуляции и глубокое увлажнение создают наиболее благоприятные условия для чувствительной кожи. Специально разработанный комплекс защищает кожу от преждевременного старения.', 'Активные ингредиенты: вода, эфиры жирных кислот, фосфолипиды, сфинголипиды, изоамиллаурет, неионогенные ПАВы, бетаин, пропиленгликоль, гель алоэ вера, экстракт эхинацеи, ромашка аптечная, экстракт календулы, экстракт центеллы азиатской, экстракт мелиссы, экстракт гамамелиса, экстракт липы, мочевина, трипептид-1 меди, магния глюконат, водоросли, экстракт цикория, экстракт винограда, феноксиэтанол, натрия гидроксид, ЭДТА, гиалуроновая кислота, экстракт череды, экстракт арники, экстракт календулы, отдушка, метилтиазолинон, экстракт розмарина, карбоксиметилглюкан.', 'Применение: Нанести 1 мл крема на кожу и внедрить массажными движениями. Использовать 1-2 раза день.', 'Объем: 50мл'],
        },
        {
            id: 18,
            value: ['bmc', 'care', 'oily'],
            src: oilyToner,
            title: '500мл. Тоник для жирной кожи/ Bio-Balance Toner',
            price: 1520,
            count: 1,
            p: 'Сочетание современных уникальных ингредиентов создает необходимый баланс между увлажнением и себорегуляцией. Кожа приобретает бархатистость, ухоженный и здоровый вид.',
            description: ['Действие: Жирная кожа особенно требовательна к правильному уходу. Использование активных компонентов в легкой биодоступной форме тоника ускоряет их проникновение вглубь кожи. Сочетание современных уникальных ингредиентов создает необходимый баланс между увлажнением и себорегуляцией. Эперулин – вещество, выделенное из амазонского растения семейства бобовых, обладает противовоспалительным, успокаивающим действием, снижает гиперчувствительность кожи, регулирует воспаления. Линолевая кислота регулирует качество выделяемого себума. В результате кожа приобретает бархатистость, ухоженный и здоровый вид.', 'Активные ингредиенты: вода, полисорбат 20, мочевина, бетаин, себациновая кислота, цинк PCA, мальтодекстрин, экстракт коры Эперуа, линолевая кислота, пропилен гликоль, гидролизованный протеин хлопка, экстракт мыльнянки лекарственной, метилтиазолинон, ЭДТА, отдушка, гидроксид натрия.', 'Применение: Распределить 1-2 мл тоника ватными дисками по массажным линиям. Затем нанести активное средство или продолжить процедуру.', 'Объем: 500мл'],
        },
        {
            id: 19,
            value: ['bmc', 'care', 'oily'],
            src: oilyToner,
            title: '150мл. Тоник для жирной кожи/ Bio-Balance Toner',
            price: 766,
            count: 1,
            p: 'Сочетание современных уникальных ингредиентов создает необходимый баланс между увлажнением и себорегуляцией. Кожа приобретает бархатистость, ухоженный и здоровый вид.',
            description: ['Действие: Жирная кожа особенно требовательна к правильному уходу. Использование активных компонентов в легкой биодоступной форме тоника ускоряет их проникновение вглубь кожи. Сочетание современных уникальных ингредиентов создает необходимый баланс между увлажнением и себорегуляцией. Эперулин – вещество, выделенное из амазонского растения семейства бобовых, обладает противовоспалительным, успокаивающим действием, снижает гиперчувствительность кожи, регулирует воспаления. Линолевая кислота регулирует качество выделяемого себума. В результате кожа приобретает бархатистость, ухоженный и здоровый вид.', 'Активные ингредиенты: вода, полисорбат 20, мочевина, бетаин, себациновая кислота, цинк PCA, мальтодекстрин, экстракт коры Эперуа, линолевая кислота, пропилен гликоль, гидролизованный протеин хлопка, экстракт мыльнянки лекарственной, метилтиазолинон, ЭДТА, отдушка, гидроксид натрия.', 'Применение: Распределить 1-2 мл тоника ватными дисками по массажным линиям. Затем нанести активное средство или продолжить процедуру.', 'Объем: 150мл'],
        },
        {
            id: 20,
            value: ['bmc', 'care', 'oily'],
            src: oilyCrem,
            title: '150мл. Крем для жирной кожи/ Six in One Cream',
            price: 2200,
            count: 1,
            p: 'Крем улучшает микроциркуляцию, устраняет оксидантный стресс, восстанавливает клеточное дыхание, ускоряет репаративные процессы. Повышает сопротивляемость воздействию агрессивных факторов внешней среды, предупреждает и уменьшает имеющиеся возрастные изменения.',
            description: ['Действие: сбалансированный состав крема улучшает микроциркуляцию, устраняет оксидантный стресс, восстанавливает клеточное дыхание, ускоряет репаративные процессы. Чаульмугровое масло обладает отличным антисептическим, ранозаживляющим, противовоспалительным, венотонизирующим и антибактериальным действием. Оно незаменимо в лечении сложных заболеваний кожи и кровеносных сосудов. Масло черного тмина и масло мануки оказывают противогрибковое, антибактериальное, противовирусное действие. Трипептид меди-1 оказывает восстанавливающее и омолаживающее действие, способствует устранению пигментации и стимулирует синтез коллагена. Водоросли увлажняют и репарируют кожу. Длительное использование крема нормализует работу сальных желез, не пересушивая кожу, повышает сопротивляемость воздействию агрессивных факторов внешней среды, предупреждает и уменьшает имеющиеся возрастные изменения.', 'Активные ингредиенты: вода, диметикон, себациновая кислота, кремний, бетаин, мочевина, масло чаульмугры,масло черного тмина, эфирное масло чайного дерева, аминокислоты пшеницы, пальмовые глицериды, глицин, экстракт цветков магнолии, изостеарилизостеарат, трипептид меди-1, магния глюконат, экстракт водорослей, экстракт корня цикория, мальтоза, масло жожоба, масло шалфея, экстракт сосны, метилтиазолинон, ЭДТА, экстракт розмарина, отдушка.', 'Применение: нанести крем тонким слоем 0,5-1 мл, внедрить массажными движениями. Сочетать с себорегулирующей сывороткой.', 'Объем: 150мл'],
        },
        {
            id: 21,
            value: ['bmc', 'care', 'oily'],
            src: oilyCrem,
            title: '50мл. Крем для жирной кожи/ Six in One Cream',
            price: 1220,
            count: 1,
            p: 'Крем улучшает микроциркуляцию, устраняет оксидантный стресс, восстанавливает клеточное дыхание, ускоряет репаративные процессы. Повышает сопротивляемость воздействию агрессивных факторов внешней среды, предупреждает и уменьшает имеющиеся возрастные изменения.',
            description: ['Действие: сбалансированный состав крема улучшает микроциркуляцию, устраняет оксидантный стресс, восстанавливает клеточное дыхание, ускоряет репаративные процессы. Чаульмугровое масло обладает отличным антисептическим, ранозаживляющим, противовоспалительным, венотонизирующим и антибактериальным действием. Оно незаменимо в лечении сложных заболеваний кожи и кровеносных сосудов. Масло черного тмина и масло мануки оказывают противогрибковое, антибактериальное, противовирусное действие. Трипептид меди-1 оказывает восстанавливающее и омолаживающее действие, способствует устранению пигментации и стимулирует синтез коллагена. Водоросли увлажняют и репарируют кожу. Длительное использование крема нормализует работу сальных желез, не пересушивая кожу, повышает сопротивляемость воздействию агрессивных факторов внешней среды, предупреждает и уменьшает имеющиеся возрастные изменения.', 'Активные ингредиенты: вода, диметикон, себациновая кислота, кремний, бетаин, мочевина, масло чаульмугры,масло черного тмина, эфирное масло чайного дерева, аминокислоты пшеницы, пальмовые глицериды, глицин, экстракт цветков магнолии, изостеарилизостеарат, трипептид меди-1, магния глюконат, экстракт водорослей, экстракт корня цикория, мальтоза, масло жожоба, масло шалфея, экстракт сосны, метилтиазолинон, ЭДТА, экстракт розмарина, отдушка.', 'Применение: нанести крем тонким слоем 0,5-1 мл, внедрить массажными движениями. Сочетать с себорегулирующей сывороткой.', 'Объем: 50мл'],
        },
        {
            id: 22,
            value: ['bmc', 'care', 'normal'],
            src: normalToner,
            title: '500мл. Тоник для сухой и нормальной кожи с гиалуроновой кислотой/ Hyaluronic Toner for dry & normal skin',
            price: 1370,
            count: 1,
            p: 'Тоник с приятным растительным ароматом. Действие направлено на сохранение влаги, улучшение микроциркуляции, осветление кожи и мощный антиоксидантный эффект.',
            description: ['Действие: Легкий волнующий тоник с приятным растительным ароматом прекрасно подходит для всех типов кожи с сухостью, а также для чувствительной кожи. Его действие направлено на сохранение влаги, улучшение микроциркуляции, осветление кожи и мощный антиоксидантный эффект. В состав тоника входит уникальный биофлавоноид гесперидин, активно улучшающий микроциркуляцию, осветляющий кожу, снимающий стресс и усталость. Фосфолипиды, витамины, экстракт лакричника восстанавливают гидролипидную мантию, защищая кожу от внешних и внутренних раздражений. Некоторые компоненты Тоника используются для лечения атопического дерматита.', 'Активные ингредиенты: деионизированная вода, бутилен гликоль, мочевина, бетаин, феноксиэтанол, дипотассиумглицирризат, глюкозилгесперидин, фолиевая кислота, гиалуронат натрия, ниацинамид, гидролизованный протеин хлопка, кокоилпролин, аромат, ЭДТА, экстракт листьев розмарина лекарственного.', 'Применение: Распределить 1-2 мл тоника ватными дисками по массажным линиям. После нанести активное средство или продолжить процедуру.', 'Объем: 500мл'],
        },
        {
            id: 23,
            value: ['bmc', 'care', 'normal'],
            src: normalToner,
            title: '150мл. Тоник для сухой и нормальной кожи с гиалуроновой кислотой/ Hyaluronic Toner for dry & normal skin',
            price: 765,
            count: 1,
            p: 'Тоник с приятным растительным ароматом. Действие направлено на сохранение влаги, улучшение микроциркуляции, осветление кожи и мощный антиоксидантный эффект.',
            description: ['Действие: Легкий волнующий тоник с приятным растительным ароматом прекрасно подходит для всех типов кожи с сухостью, а также для чувствительной кожи. Его действие направлено на сохранение влаги, улучшение микроциркуляции, осветление кожи и мощный антиоксидантный эффект. В состав тоника входит уникальный биофлавоноид гесперидин, активно улучшающий микроциркуляцию, осветляющий кожу, снимающий стресс и усталость. Фосфолипиды, витамины, экстракт лакричника восстанавливают гидролипидную мантию, защищая кожу от внешних и внутренних раздражений. Некоторые компоненты Тоника используются для лечения атопического дерматита.', 'Активные ингредиенты: деионизированная вода, бутилен гликоль, мочевина, бетаин, феноксиэтанол, дипотассиумглицирризат, глюкозилгесперидин, фолиевая кислота, гиалуронат натрия, ниацинамид, гидролизованный протеин хлопка, кокоилпролин, аромат, ЭДТА, экстракт листьев розмарина лекарственного.', 'Применение: Распределить 1-2 мл тоника ватными дисками по массажным линиям. После нанести активное средство или продолжить процедуру.', 'Объем: 150мл'],
        },
        {
            id: 24,
            value: ['bmc', 'care', 'normal'],
            src: normalCream,
            title: '150мл. Увлажняющий крем с пептидами/ Peptide Cream “Hydralift”',
            price: 2400,
            count: 1,
            p: 'Инновационный крем для активного увлажнения и омоложения кожи лица. Значительно уменьшает признаки фото- и хроностарения: пигментация, морщины, снижение тургора и эластичности кожи, изменение рельефа кожи.',
            description: ['Действие: Инновационный крем для активного увлажнения и омоложения кожи лица включает в состав комплекс церамидов, сфинголипидов и жирных кислот, которые эффективно восстанавливают эпидермальный барьер кожи. Трипептид меди способствует обновлению клеток, репарации и восстановлению ДНК. Оказывает противовоспалительный и антиоксидантный эффект. Гиалуроновая кислота глубоко увлажняет и стимулирует образование собственной гиалуроновой кислоты. При длительном применении значительно уменьшает признаки фото- и хроностарения: пигментация, морщины, снижение тургора и эластичности кожи, изменение рельефа кожи.', 'Активные ингредиенты: фосфолипиды, сфинголипиды, мочевина, бетаин, экстракт коры ТерминалииАрджуны, трипептид меди-1, масло растительное, мальтодекстрин, экстракт коры эперуа, глицериллаурэт, морской магний, водоросли, экстракт корня цикория, мальтоза, экстракт арники, шалфея лекарственного экстракт, гиалуронат натрия, натрия гидроксид, метилтиазолинон, отдушка, ЭДТА, экстракт листьев розмарина.', 'Применение: на подготовленную кожу нанести крем в объеме 1-2 мл и впитать его легкими массажными движениями 1-2 раза в день. Подходит для использования под макияж.', 'Объем: 150мл'],
        },
        {
            id: 25,
            value: ['bmc', 'care', 'normal'],
            src: normalCream,
            title: '50мл. Увлажняющий крем с пептидами/ Peptide Cream “Hydralift”',
            price: 1370,
            count: 1,
            p: 'Инновационный крем для активного увлажнения и омоложения кожи лица. Значительно уменьшает признаки фото- и хроностарения: пигментация, морщины, снижение тургора и эластичности кожи, изменение рельефа кожи.',
            description: ['Действие: Инновационный крем для активного увлажнения и омоложения кожи лица включает в состав комплекс церамидов, сфинголипидов и жирных кислот, которые эффективно восстанавливают эпидермальный барьер кожи. Трипептид меди способствует обновлению клеток, репарации и восстановлению ДНК. Оказывает противовоспалительный и антиоксидантный эффект. Гиалуроновая кислота глубоко увлажняет и стимулирует образование собственной гиалуроновой кислоты. При длительном применении значительно уменьшает признаки фото- и хроностарения: пигментация, морщины, снижение тургора и эластичности кожи, изменение рельефа кожи.', 'Активные ингредиенты: фосфолипиды, сфинголипиды, мочевина, бетаин, экстракт коры ТерминалииАрджуны, трипептид меди-1, масло растительное, мальтодекстрин, экстракт коры эперуа, глицериллаурэт, морской магний, водоросли, экстракт корня цикория, мальтоза, экстракт арники, шалфея лекарственного экстракт, гиалуронат натрия, натрия гидроксид, метилтиазолинон, отдушка, ЭДТА, экстракт листьев розмарина.', 'Применение: на подготовленную кожу нанести крем в объеме 1-2 мл и впитать его легкими массажными движениями 1-2 раза в день. Подходит для использования под макияж.', 'Объем: 50мл'],
        },
    ];

export default catalogs;