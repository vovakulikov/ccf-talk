import React from 'react';

import { baseTextColor } from "./colors";
import { Presentation, Slide } from "presa";
import { H1, H2, H3, Caption, H4 } from "presa/blocks";

// Slides in separate components
import IntroSlide from './slides/intro';
import WhatIsCCF from "./slides/what-is-ccf";
import ImageOfCCF from "./slides/cf-create-dialog";
import LexicalAnalyze from "./slides/lex-analyze";
import LexicalAnalyzeExample from "./slides/lexical-analyze-demo";
import FMSTransitions from './slides/number-transition-fsm'
import FSMExplanation from "./slides/fsm-explanation";
import SyntaxAnalyze from "./slides/syntax-analyze";
import BackusNaurForm from "./slides/backus-naur-form";
import TerminalDemo from "./slides/terminal-non-terminal";
import ShiftReduce from "./slides/shift-reduce";

// Local Components helpers
import PlainSlide from './components/plain-slide'
import List from './components/list';
import MathExpression, { Formula } from './components/math-slide';
import Quote from "./components/quote";

// Images asset
import formulaImage from './images/formula.jpeg';
import IgorImage from './images/igor.jpeg';
import RegularIgorImage from './images/regular-igor.jpeg';
import ReportCCFImage from './images/ccf-in-reports.jpeg';
import CompilerPipelineImage from './images/compiler-pipeline.png';
import DoggeImage from './images/dogge.jpg';
import NumberLexFlowImage from './images/number-lex-flow.gif';
import NoNoNoVideo from './images/nonono.mp4';
import FormalLangs from './images/formal-langs.jpeg';
import DartGrammarLang from './images/dart-grammar.jpeg';
import ASTImage from './images/ast.jpeg';
import MagicImage from './images/magic.mp4';
import GlebNormalImage from './images/gleb-normal.jpeg';
import GlebNotNormalImage from './images/gleb-around-garbage-backet.jpg'
import GlebInBadStateImage from './images/gleb-in-bad-state.jpg'
import WeAtTheEndOfJourney from './images/we-at-the-end-of-jorney.mp4';
import RomaImage from './images/roma.png';
import DreamImage from './images/livint-the-dream.jpeg';
import TableViewCCFImage from './images/ccf-at-table-view.gif';

const PresentationPitch = () => (
    <Presentation
        name="How we did and how we still do ccf at table-view"
        tableOfContents
        useFullscreenAPI
        theme={{ textColor: baseTextColor }}
    >

        <IntroSlide name='Введение'/>

        <WhatIsCCF name='Что такое CCF?'/>

        <ImageOfCCF name="Диалог создания" />

        <PlainSlide name="Формула">
            <img src={formulaImage} alt="formula" />
        </PlainSlide>

        <PlainSlide name="CCF в таблице">
            <img src={TableViewCCFImage} alt="Table view at ccf" style={{ width: "100%", transform: 'translateX(-5px)'}}/>
        </PlainSlide>

        <PlainSlide name="Прошлогодняя фича">
            <H2>Это уже было в 2018 году! 😲</H2>
        </PlainSlide>

        <PlainSlide name="Игорь не грусти">
            <img src={IgorImage} alt="Igor dont be sad" style={{height: "100%" }}/>
        </PlainSlide>

        <PlainSlide name="Игорь обыкновенный">
            <img src={RegularIgorImage} alt="Igor dont be sad" style={{ height: "100%" }}/>
        </PlainSlide>

        <Slide centered name="Гений!!!!">
            <H2>Игорь Зубов написал первую версию и движок калькуляций еще весной 2018 🔥🎸</H2>
        </Slide>

        <PlainSlide name="Калькуляции в репортах">
            <img src={ReportCCFImage} alt="Калькуляции в репортах" style={{ width: '50%'}}/>
        </PlainSlide>

        <PlainSlide name="Прошлогодняя фича">
            <H2>В 2019 скоуп по Table View перешел к Gantt team</H2>

            <Caption style={{fontStyle: 'italic', marginTop: '40px'}}>Было бы круто иметь функционал калькуляций в тейбл вью</Caption>
            <Caption>— Андрей Пономарев </Caption>
        </PlainSlide>

        <PlainSlide centered name="Собакен">
            <img src={DoggeImage} alt="Dogge meme" style={{ height: '100%'}}/>
        </PlainSlide>

        <Slide name="Хард скиллы">
            <H1>Что нужно уметь для CCF</H1>
            <List>
                <li>Парсить строку в лексемы (лексический анализ)</li>
                <li>Проверять синтаксис математических выражений (синтаксический анализ)</li>
                <li>Проверить типы операндов в выражениях (Type checking)</li>
                <li>Исполнять формулы для получения результата</li>
            </List>
        </Slide>

        <PlainSlide centered name="Пайплайн компиляции">
            <img src={CompilerPipelineImage} alt="compilationPipeline" style={{ width: "70%" }}/>
        </PlainSlide>

        <LexicalAnalyze name="Лексический анализ"/>

        <LexicalAnalyzeExample name="Пример лексического анализа" />

        <Slide name="Как сделать лексический анализатор">
            <H2>Как реализовать?</H2>

            <List style={{ marginTop: '40px' }}>
                <li>Регулярки</li>
                <li>Конечные автоматы</li>
            </List>
        </Slide>

        <MathExpression centered name="Регулярка для чисел">
            <Formula fontSize={30} formula="/\^[+\-]?(?=.)(0|[1-9]\d*)?(\.\d*)?(?:(\d)[eE][+\-]?\d+)?$/" />
        </MathExpression>

        <PlainSlide centered name="Схема анализа для чисел">
            <img src={NumberLexFlowImage} alt="Number Lex flow" style={{ width: '80%'}}/>
        </PlainSlide>

        <Slide name="Конечный автомат">
            <H1>Конечный автомат</H1>

            <Quote style={{fontStyle: 'italic', marginTop: '40px'}} >
                Математическая абстракция, модель дискретного устройства, имеющего один вход, один выход и
                в каждый момент времени находящегося в одном состоянии из множества возможных
            </Quote>

            <Caption style={{fontStyle: 'italic', marginTop: '40px'}}>
                Хорошим примером является обычный светофор
            </Caption>
        </Slide>

        <FSMExplanation name='Конечный автомат это пятерка'/>

        <FMSTransitions name="Переходы FSM"/>

        <Slide centered name="Хлава конечным автоматам">
            <H2>Конечные автоматы это хорошо</H2>
            <H3 style={{ marginTop: '40px'}}>
                Наглядны, хорошо тестируются, более прозрачный флоу чем у регулярных выражений
            </H3>
        </Slide>


        <Slide centered name="Хлава конечным автоматам">
            <H2>Проблема #1</H2>
            <H3 style={{ marginTop: '40px'}}>
                Мы должны поддерживать пробелы в наших переменных в формуле, так как наши переменные это
                название кастом филдов, а почти все из них имееют пробелы
            </H3>
        </Slide>

        <Slide centered name="Хлава конечным автоматам">
            <H2>Решение #1</H2>

            <H3 style={{ marginTop: '40px'}}>
                Оборачиваем все наши переменные в []
            </H3>

            <Caption style={{ marginTop: '40px'}}>
                [Duration], [[Be] Estimation], [Start Date] ...
            </Caption>
        </Slide>

        <PlainSlide name="Неть">
            <video style={{ width: '100%', height: '100%' }} autoPlay muted loop id="myVideo">
                <source src={NoNoNoVideo} type="video/mp4" />
            </video>
        </PlainSlide>

        <Slide centered name="Проблема #2">
            <H2>Проблема #2</H2>
            <H3 style={{ marginTop: '40px'}}>
               Что если кастом филд будет называться a]+[a ????
            </H3>
            <H3 style={{ marginTop: '40px', fontSize: '100px'}}>
                🤯
            </H3>
        </Slide>

        <SyntaxAnalyze name="Синтаксический анализ" />

        <PlainSlide name="Формальные языки">
            <img src={FormalLangs} alt="Formal langs" style={{ height: '100%'}} />
        </PlainSlide>

        <BackusNaurForm name="Форма Бэкуса — Наура"/>

        <PlainSlide centered name="Грамматика dart">
            <img src={DartGrammarLang} alt="Dart grammar" style={{ height: '100%' }}/>
        </PlainSlide>

        <TerminalDemo name="Терминалы и нетерминалы" />

        <Slide name='Типы алгоритмов синтаксического анализа'>
            <H1>Типы алгоритмов</H1>
            <List>
                <li>
                    Нисходящий парсеры
                    <List>
                        <li>Метод рекурсивного спуска</li>
                        <li>LL-анализ</li>
                    </List>
                </li>
                <li>
                    Восходящие парсеры
                    <List>
                        <li>Метод рекурсивного спуска</li>
                        <li>LR-анализ</li>
                        <li>Operator grammar (with precedence matrix)</li>
                    </List>
                </li>
            </List>
        </Slide>

        <ShiftReduce name="Алгоритм сдвиг свертка"/>

        <Slide centered name="Цепочка вывода">
            <H2>Цепочка вывода</H2>

            <H3 style={{ marginTop: '40px' }}>E ↝ -E ↝ -E&E ↝ -E&p ↝ -E^E&p ↝ -E^p&p ↝ -p^p&p</H3>

            <img src={ASTImage} alt="Ast" style={{ height: '80%'}}/>
        </Slide>

        <PlainSlide name="Magic">
            <video style={{ width: '100%', height: '100%' }} autoPlay muted loop id="myVideo">
                <source src={MagicImage} type="video/mp4" />
            </video>
        </PlainSlide>

        <Slide centered name="Type checking">
            <H2>Type checking</H2>
        </Slide>

        <Slide centered name="Type checking note">
            <H2>Что нужно для type checking</H2>

            <H3 style={{ marginTop: '40px'}}>
                Все что нужно это обойти дерево в глубину и запустить функцию typeCheck на каждой тройке - node operator node
            </H3>
        </Slide>

        <Slide centered name="Type checking is a nightmare">
            <H2>Type checking - это продуктовый кошмар</H2>
        </Slide>

        <PlainSlide name="Это Глеб">
            <img src={GlebNormalImage} alt="Normal Gleb" style={{ height: '100%'}} />
        </PlainSlide>

        <PlainSlide name="Это Глеб устал">
            <img src={GlebNotNormalImage} alt="Normal Gleb" style={{ height: '100%'}} />
        </PlainSlide>

        <PlainSlide name="Живу мечтой">
            <img src={DreamImage} alt="Living the dream" style={{ height: '100%'}} />
        </PlainSlide>

        <PlainSlide name="Это Глеб очень устал устал">
            <img src={GlebInBadStateImage} alt="Normal Gleb" style={{ height: '100%'}} />
        </PlainSlide>

        <PlainSlide name="Конец">
            <video style={{ width: '100%', height: '100%' }} autoPlay muted loop>
                <source src={WeAtTheEndOfJourney} type="video/mp4" />
            </video>
        </PlainSlide>

        <Slide centered name="Type checking note">
            <H2>Мы не прошли даже и половину пути, впереди backend</H2>
        </Slide>

        <Slide centered name="Хорошого всем дня" background={RomaImage} inversed>
            <H1 style={{ color: 'white', fontSize: '80px' }}>Хорошого всем дня!</H1>
        </Slide>



    </Presentation>
);

export default PresentationPitch;
