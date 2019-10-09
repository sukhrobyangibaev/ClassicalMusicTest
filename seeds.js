 var mongoose = require("mongoose");
 var Player = require("./models/player");
 var Raund = require("./models/raund");

 data = [
    {
        lvl: 1,
        titles:[
            "Antonio Vivaldi - The Four Seasons - Winter",
            "Antonio Vivaldi - The Four Seasons - Summer",
            "Antonio Vivaldi - The Four Seasons - Spring",
            "Antonio Vivaldi - The Four Seasons - Autumn"
            ],
        correct: "Antonio Vivaldi - The Four Seasons - Summer",
         sound: "sound/lvl1/vivaldi-summer.mp3"
    },
    {
        lvl: 1,
        titles:[
            "Antonio Vivaldi - The Four Seasons - Winter",
            "Antonio Vivaldi - The Four Seasons - Summer",
            "Antonio Vivaldi - The Four Seasons - Spring",
            "Antonio Vivaldi - The Four Seasons - Autumn"
            ],
        correct: "Antonio Vivaldi - The Four Seasons - Winter",
        sound: "sound/lvl1/vivaldi-winter.mp3"
    },
    {
        lvl: 1,
        titles:[
            "Antonio Vivaldi - The Four Seasons - Winter",
            "Antonio Vivaldi - The Four Seasons - Summer",
            "Antonio Vivaldi - The Four Seasons - Spring",
            "Antonio Vivaldi - The Four Seasons - Autumn"
            ],
        correct: "Antonio Vivaldi - The Four Seasons - Spring",
        sound: "sound/lvl1/vivaldi-spring.mp3"
    },
    {
        lvl: 1,
        titles:[
            "Beethoven - Für Elise",
            "Prokofiev - Romeo and Juliet, Dance of the Knights",
            "Beethoven - Piano Sonata No. 17",
            "Beethoven - Symphony #6 3. Allegro"
            ],
        correct: "Beethoven - Für Elise",
        sound: "sound/lvl1/elise.mp3"
    },
    {
        lvl: 1,
        titles:[
            "Beethoven - Für Elise",
            "Beethoven - Moonlight Sonata",
            "Beethoven - Piano Sonata No. 17",
            "Debussy - Clair de Lune"
            ],
        correct: "Beethoven - Moonlight Sonata",
        sound: "sound/lvl1/moonlight.mp3"
    },
    {
        lvl: 1,
        titles:[
            "Beethoven - Für Elise",
            "Beethoven - 5th Symphony",
            "Beethoven - Piano Sonata No. 17",
            "Beethoven - Symphony #6 3. Allegro"
            ],
        correct: "Beethoven - 5th Symphony",
        sound: "sound/lvl1/bethoven-5-symphony.mp3"
    },
    {
        lvl: 1,
        titles:[
            "Debussy - Clair de Lune",
            "Beethoven - Moonlight Sonata",
            "Debussy - Arabesque No. 1",
            "Carlos Gardel - Por una Cabeza"
            ],
        correct: "Debussy - Clair de Lune",
        sound: "sound/lvl1/debussy-lune.mp3"
    },
    {
        lvl: 1,
        titles:[
            "Rimsky-Korsakov - Flight of the Bumblebee",
            "Mozart - The Marriage of Figaro",
            "Rachmaninoff - Piano Concerto No.3",
            "Carlos Gardel - Por una Cabeza"
            ],
        correct: "Rimsky-Korsakov - Flight of the Bumblebee",
        sound: "sound/lvl1/bumblebee.mp3"
    },
    {
        lvl: 1,
        titles:[
            "Mozart - Rondo Alla Turca",
            "Mendelssohn - A Midsummer Night's Dream",
            "Rachmaninoff - Piano Concerto No.3",
            "Chopin - Grande Valse Brillante"
            ],
        correct: "Mozart - Rondo Alla Turca",
        sound: "sound/lvl1/turca.mp3"
    },
    {
        lvl: 2,
        titles:[
            "Debussy - Arabesque No. 1",
            "Mozart - Symphony No. 25 in G minor",
            "Liszt - Hungarian Rhapsody No. 2",
            "Erik Satie - Gnossienne 1"
            ],
        correct: "Debussy - Arabesque No. 1",
        sound: "sound/lvl2/arabesque.mp3"
    },
    {
        lvl: 2,
        titles:[
            "Mendelssohn - A Midsummer Night's Dream",
            "Mozart - Symphony No. 25 in G minor",
            "Liszt - Hungarian Rhapsody No. 2",
            "Erik Satie - Gnossienne 1"
            ],
        correct: "Mendelssohn - A Midsummer Night's Dream",
        sound: "sound/lvl2/wedding.mp3"
    },
    {
        lvl: 2,
        titles:[
            "Mozart-The Marriage of Figaro",
            "Tchaikovsky - Dance of the Little Swans",
            "Saint-Saëns - The Swan",
            "Erik Satie - Gnossienne 1"
            ],
        correct: "Mozart-The Marriage of Figaro",
        sound: "sound/lvl2/figaro.mp3"
    },
    {
        lvl: 2,
        titles:[
            "Carlos Gardel - Por una Cabeza",
            "Tchaikovsky - Dance of the Little Swans",
            "Saint-Saëns - The Swan",
            "Erik Satie - Gnossienne 1"
            ],
        correct: "Carlos Gardel - Por una Cabeza",
        sound: "sound/lvl2/cabeza.mp3"
    },
    {
        lvl: 2,
        titles:[
            "Prokofiev - Dance of the Knights",
            "Johann Strauss  - The Beautiful Blue Danube",
            "Liszt - La Campanella",
            "Erik Satie - Gnossienne 1"
            ],
        correct: "Prokofiev - Dance of the Knights",
        sound: "sound/lvl2/knights.mp3"
    },
    {
        lvl: 2,
        titles:[
            "Tchaikovsky - Dance of the Little Swans",
            "Johann Strauss  - The Beautiful Blue Danube",
            "Liszt - La Campanella",
            "Erik Satie - Gnossienne 1"
            ],
        correct: "Tchaikovsky - Dance of the Little Swans",
        sound: "sound/lvl2/little-swans.mp3"
    },
    {
        lvl: 2,
        titles:[
            "Johann Strauss  - The Beautiful Blue Danube",
            "Bach - Toccata and Fugue in D Minor",
            "Mozart - Symphony No. 25 in G minor",
            "Debussy - Rêverie"
            ],
        correct: "Johann Strauss  - The Beautiful Blue Danube",
        sound: "sound/lvl2/danube.mp3"
    },
    {
        lvl: 2,
        titles:[
            "Bach - Toccata and Fugue in D Minor",
            "Scott Joplin - The Entertainer",
            "Mozart - Symphony No. 25 in G minor",
            "Debussy - Rêverie"
            ],
        correct: "Bach - Toccata and Fugue in D Minor",
        sound: "sound/lvl2/toccata.mp3"
    },
    {
        lvl: 2,
        titles:[
            "Mozart - Symphony No. 25 in G minor",
            "Scott Joplin - The Entertainer",
            "Chopin - Heroic Polonaise",
            "Vivaldi - Nulla in Mundo Pax Sincera"
            ],
        correct: "Mozart - Symphony No. 25 in G minor",
        sound: "sound/lvl2/mozart.mp3"
    },
    {
        lvl: 2,
        titles:[
            "Saint-Saëns - The Swan",
            "Dmitri Shostakovich - Waltz No. 2",
            "Chopin - Heroic Polonaise",
            "Vivaldi - Nulla in Mundo Pax Sincera"
            ],
        correct: "Saint-Saëns - The Swan",
        sound: "sound/lvl2/swan.mp3"
    },
    {
        lvl: 3,
        titles:[
            "Richard Strauss - Also sprach Zarathustra",
            "Chopin - Grande Valse Brillante",
            "Paul de Senneville - Mariage d'Amour",
            "Pachelbel - Canon In D Major"
            ],
        correct: "Richard Strauss - Also sprach Zarathustra",
        sound: "sound/lvl3/zaratustra.mp3"
    },
    {
        lvl: 3,
        titles:[
            "Chopin - Grande Valse Brillante",
            "Tchaikovsky - Dance of the Sugar-Plum Fairy",
            "Paul de Senneville - Mariage d'Amour",
            "Pachelbel - Canon In D Major"
            ],
        correct: "Chopin - Grande Valse Brillante",
        sound: "sound/lvl3/grande.mp3"
    },
    {
        lvl: 3,
        titles:[
            "Tchaikovsky - Dance of the Sugar-Plum Fairy",
            "Debussy - Rêverie",
            "Liszt - Hungarian Rhapsody No. 6",
            "Pachelbel - Canon In D Major"
            ],
        correct: "Tchaikovsky - Dance of the Sugar-Plum Fairy",
        sound: "sound/lvl3/sugar.mp3"
    },
    {
        lvl: 3,
        titles:[
            "Debussy - Rêverie",
            "Erik Satie -  Gnossienne 1",
            "Liszt - Hungarian Rhapsody No. 6",
            "Bach - Prelude 1 in C Major"
            ],
        correct: "Debussy - Rêverie",
        sound: "sound/lvl3/reverie.mp3"
    },
    {
        lvl: 3,
        titles:[
            "Erik Satie -  Gnossienne 1",
            "Scott Joplin - The Entertainer",
            "Liszt - Hungarian Rhapsody No. 6",
            "Bach - Prelude 1 in C Major"
            ],
        correct: "Erik Satie -  Gnossienne 1",
        sound: "sound/lvl3/gnoss.mp3"
    },
    {
        lvl: 3,
        titles:[
            "Liszt - La Campanella",
            "Chopin Heroic Polonaise op 53 A flat major Valentina Lisitsa",
            "Aram Khachaturian - Sabre Dance",
            "Bach - Prelude 1 in C Major"
            ],
        correct: "Liszt - La Campanella",
        sound: "sound/lvl3/campanella.mp3"
    },
    {
        lvl: 3,
        titles:[
            "Paul de Senneville - Mariage d'Amour",
            "Tchaikovsky - Dance of the Sugar-Plum Fairy",
            "Paganini Caprice no.24",
            "Pachelbel - Canon In D Major"
            ],
        correct: "Paul de Senneville - Mariage d'Amour",
        sound: "sound/lvl3/mariage.mp3"
    },
    {
        lvl: 3,
        titles:[
            "Scott Joplin - The Entertainer",
            "Gershwin - Rhapsody In Blue",
            "Liszt - Hungarian Rhapsody No. 6",
            "Bach - Prelude 1 in C Major"
            ],
        correct: "Scott Joplin - The Entertainer",
        sound: "sound/lvl3/enter.mp3"
    },
    {
        lvl: 3,
        titles:[
            "Bach - Prelude 1 in C Major",
            "Gershwin - Rhapsody In Blue",
            "Liszt - Hungarian Rhapsody No. 6",
            "Tchaikovsky - Waltz of the Flowers"
            ],
        correct: "Bach - Prelude 1 in C Major",
        sound: "sound/lvl3/bach.mp3"
    },
    {
        lvl: 3,
        titles:[
            "Liszt - Hungarian Rhapsody No. 2",
            "Gershwin - Rhapsody In Blue",
            "Liszt - Hungarian Rhapsody No. 6",
            "Tchaikovsky - Waltz of the Flowers"
            ],
        correct: "Liszt - Hungarian Rhapsody No. 2",
        sound: "sound/lvl3/hungary2.mp3"
    },
    {
        lvl: 4,
        titles:[
            "Chopin - Heroic Polonaise",
            "Gershwin - Rhapsody In Blue",
            "Liszt - Hungarian Rhapsody No. 6",
            "Tchaikovsky - Waltz of the Flowers"
            ],
        correct: "Chopin - Heroic Polonaise",
        sound: "sound/lvl4/heroic.mp3"
    },
    {
        lvl: 4,
        titles:[
            "Liszt - Hungarian Rhapsody No. 6",
            "Gershwin - Rhapsody In Blue",
            "Paganini Caprice no.24",
            "Tchaikovsky - Waltz of the Flowers"
            ],
        correct: "Liszt - Hungarian Rhapsody No. 6",
        sound: "sound/lvl4/hr6.mp3"
    },
    {
        lvl: 4,
        titles:[
            "Mozart - Symphony No. 40",
            "Vivaldi - Nulla in Mundo Pax Sincera",
            "Paganini Caprice no.24",
            "Tchaikovsky - Waltz of the Flowers"
            ],
        correct: "Mozart - Symphony No. 40",
        sound: "sound/lvl4/symph40.mp3"
    },
    {
        lvl: 4,
        titles:[
            "Pachelbel - Canon In D Major",
            "Vivaldi - Nulla in Mundo Pax Sincera",
            "Paganini Caprice no.24",
            "Tchaikovsky - Waltz of the Flowers"
            ],
        correct: "Pachelbel - Canon In D Major",
        sound: "sound/lvl4/canon.mp3"
    },
    {
        lvl: 4,
        titles:[
            "Paganini Caprice no.24",
            "Vivaldi - Nulla in Mundo Pax Sincera",
            "Chopin - Ballade No. 1 in G Minor",
            "Scott Joplin - Maple Leaf Rag"
            ],
        correct: "Paganini Caprice no.24",
        sound: "sound/lvl4/caprice.mp3"
    },
    {
        lvl: 4,
        titles:[
            "Rachmaninoff - Rhapsody on a Theme of Paganini",
            "Vivaldi - Nulla in Mundo Pax Sincera",
            "Chopin - Ballade No. 1 in G Minor",
            "Scott Joplin - Maple Leaf Rag"
            ],
        correct: "Rachmaninoff - Rhapsody on a Theme of Paganini",
        sound: "sound/lvl4/rach.mp3"
    },
    {
        lvl: 4,
        titles:[
            "Gershwin - Rhapsody In Blue",
            "Rachmaninoff - Rhapsody on a Theme of Paganini",
            "Chopin - Ballade No. 1 in G Minor",
            "Scott Joplin - Maple Leaf Rag"
            ],
        correct: "Gershwin - Rhapsody In Blue",
        sound: "sound/lvl4/blue.mp3"
    },
    {
        lvl: 4,
        titles:[
            "Aram Khachaturian - Sabre Dance",
            "Rachmaninoff - Rhapsody on a Theme of Paganini",
            "Chopin - Ballade No. 1 in G Minor",
            "Scott Joplin - Maple Leaf Rag"
            ],
        correct: "Aram Khachaturian - Sabre Dance",
        sound: "sound/lvl4/aram.mp3"
    },
    {
        lvl: 4,
        titles:[
            "Tchaikovsky - Waltz of the Flowers",
            "Rachmaninoff - Rhapsody on a Theme of Paganini",
            "Chopin - Ballade No. 1 in G Minor",
            "Aram Khachaturian - Sabre Dance"
            ],
        correct: "Tchaikovsky - Waltz of the Flowers",
        sound: "sound/lvl4/waltz.mp3"
    },
    {
        lvl: 4,
        titles:[
            "Vivaldi - Nulla in Mundo Pax Sincera",
            "Rachmaninoff - Rhapsody on a Theme of Paganini",
            "Chopin - Ballade No. 1 in G Minor",
            "Aram Khachaturian - Sabre Dance"
            ],
        correct: "Vivaldi - Nulla in Mundo Pax Sincera",
        sound: "sound/lvl4/nulla.mp3"
    },
    {
        lvl: 5,
        titles:[
            "Antonín Dvořák - Symphony No. 9",
            "Beethoven - Piano Sonata No. 17",
            "Chopin - Nocturne in C Sharp Minor",
            "Liszt - Liebestraum No. 3"
            ],
        correct: "Antonín Dvořák - Symphony No. 9",
        sound: "sound/lvl5/dvorak.mp3"
    },
    {
        lvl: 5,
        titles:[
            "Beethoven - Piano Sonata No. 17",
            "Antonín Dvořák - Symphony No. 9",
            "Chopin - Nocturne in C Sharp Minor",
            "Liszt - Liebestraum No. 3"
            ],
        correct: "Beethoven - Piano Sonata No. 17",
        sound: "sound/lvl5/bethoven.mp3"
    },
    {
        lvl: 5,
        titles:[
            "Chopin - Ballade No. 1 in G Minor",
            "Antonín Dvořák - Symphony No. 9",
            "Mozart - Piano Sonata No. 16 in C Major",
            "Liszt - Liebestraum No. 3"
            ],
        correct: "Chopin - Ballade No. 1 in G Minor",
        sound: "sound/lvl5/ballad.mp3"
    },
    {
        lvl: 5,
        titles:[
            "Chopin - Nocturne in C Sharp Minor",
            "Antonín Dvořák - Symphony No. 9",
            "Mozart - Piano Sonata No. 16 in C Major",
            "Liszt - Liebestraum No. 3"
            ],
        correct: "Chopin - Nocturne in C Sharp Minor",
        sound: "sound/lvl5/nocturne.mp3"
    },
    {
        lvl: 5,
        titles:[
            "Dmitri Shostakovich - Waltz No. 2",
            "Antonín Dvořák - Symphony No. 9",
            "Mozart - Piano Sonata No. 16 in C Major",
            "Liszt - Liebestraum No. 3"
            ],
        correct: "Dmitri Shostakovich - Waltz No. 2",
        sound: "sound/lvl5/waltz.mp3"
    },
    {
        lvl: 5,
        titles:[
            "Edvard Grieg - Morning Mood",
            "Antonín Dvořák - Symphony No. 9",
            "Mozart - Piano Sonata No. 16 in C Major",
            "Liszt - Liebestraum No. 3"
            ],
        correct: "Edvard Grieg - Morning Mood",
        sound: "sound/lvl5/morning.mp3"
    },
    {
        lvl: 5,
        titles:[
            "Mozart - Eine Kleine Nachtmusik",
            "Antonín Dvořák - Symphony No. 9",
            "Mozart - Piano Sonata No. 16 in C Major",
            "Liszt - Liebestraum No. 3"
            ],
        correct: "Mozart - Eine Kleine Nachtmusik",
        sound: "sound/lvl5/mozart.mp3"
    },
    {
        lvl: 5,
        titles:[
            "Liszt - Liebestraum No. 3",
            "Antonín Dvořák - Symphony No. 9",
            "Mozart - Piano Sonata No. 16 in C Major",
            "Scott Joplin - Maple Leaf Rag"
            ],
        correct: "Liszt - Liebestraum No. 3",
        sound: "sound/lvl5/lieber.mp3"
    },
    {
        lvl: 5,
        titles:[
            "Mozart - Piano Sonata No. 16 in C Major",
            "Liszt - Liebestraum No. 3",
            "Antonín Dvořák - Symphony No. 9",
            "Scott Joplin - Maple Leaf Rag"
            ],
        correct: "Mozart - Piano Sonata No. 16 in C Major",
        sound: "sound/lvl5/symph.mp3"
    },
    {
        lvl: 5,
        titles:[
            "Scott Joplin - Maple Leaf Rag",
            "Mozart - Piano Sonata No. 16 in C Major",
            "Liszt - Liebestraum No. 3",
            "Antonín Dvořák - Symphony No. 9"
            ],
        correct: "Scott Joplin - Maple Leaf Rag",
        sound: "sound/lvl5/scott.mp3"
    },
    {
        lvl: 6,
        titles:[
            "Chopin - Waltz in A minor",
            "Liszt - Ständchen",
            "Bach - Brandenburg Concerto No. 3",
            "Mendelssohn - Violin Concerto E Minor"
            ],
        correct: "Chopin - Waltz in A minor",
        sound: "sound/lvl6/waltz.mp3"
    },
    {
        lvl: 6,
        titles:[
            "Liszt - Ständchen",
            "Chopin - Waltz in A minor",
            "Bach - Brandenburg Concerto No. 3",
            "Mendelssohn - Violin Concerto E Minor"
            ],
        correct: "Liszt - Ständchen",
        sound: "sound/lvl6/liszt.mp3"
    },
    {
        lvl: 6,
        titles:[
            "Bach - Brandenburg Concerto No. 3",
            "Liszt - Ständchen",
            "Chopin - Waltz in A minor",
            "Mendelssohn - Violin Concerto E Minor"
            ],
        correct: "Bach - Brandenburg Concerto No. 3",
        sound: "sound/lvl6/bach.mp3"
    },
    {
        lvl: 6,
        titles:[
            "Mendelssohn - Violin Concerto E Minor",
            "Bach - Brandenburg Concerto No. 3",
            "Liszt - Ständchen",
            "Chopin - Waltz in A minor"
            ],
        correct: "Mendelssohn - Violin Concerto E Minor",
        sound: "sound/lvl6/mendel.mp3"
    },
    {
        lvl: 6,
        titles:[
            "Mozart - Piano Sonata No 11",
            "Rachmaninoff - Piano Concerto no.2",
            "Schubert - Impromptu in G flat",
            "Tchaikovsky - Piano Concerto No 1"
            ],
        correct: "Mozart - Piano Sonata No 11",
        sound: "sound/lvl6/mozart.mp3"
    },
    {
        lvl: 6,
        titles:[
            "Rachmaninoff - Piano Concerto no.2",
            "Mozart - Piano Sonata No 11",            
            "Schubert - Impromptu in G flat",
            "Tchaikovsky - Piano Concerto No 1"
            ],
        correct: "Rachmaninoff - Piano Concerto no.2",
        sound: "sound/lvl6/rach.mp3"
    },
    {
        lvl: 6,
        titles:[
            "Schubert - Impromptu in G flat",
            "Rachmaninoff - Piano Concerto no.2",
            "Mozart - Piano Sonata No 11",            
            "Tchaikovsky - Piano Concerto No 1"
            ],
        correct: "Schubert - Impromptu in G flat",
        sound: "sound/lvl6/shubert.mp3"
    },
    {
        lvl: 6,
        titles:[
            "Tchaikovsky - Piano Concerto No 1",
            "Schubert - Impromptu in G flat",
            "Rachmaninoff - Piano Concerto no.2",
            "Mozart - Piano Sonata No 11"
            ],
        correct: "Tchaikovsky - Piano Concerto No 1",
        sound: "sound/lvl6/tchai.mp3"
    },
    {
        lvl: 6,
        titles:[
            "Wagner - Bridal Chorus",
            "Bach - Cello Suite No. 1",
            "Rachmaninoff - Piano Concerto no.2",
            "Mozart - Piano Sonata No 11"
            ],
        correct: "Wagner - Bridal Chorus",
        sound: "sound/lvl6/wagner.mp3"
    },
    {
        lvl: 6,
        titles:[
            "Bach - Cello Suite No. 1",
            "Wagner - Bridal Chorus",
            "Rachmaninoff - Piano Concerto no.2",
            "Mozart - Piano Sonata No 11"
            ],
        correct: "Bach - Cello Suite No. 1",
        sound: "sound/lvl6/bach-cello.mp3"
    },
    {
        lvl: 7,
        titles:[
            "Abreu - Tico Tico / Barenboim",
            "Beethoven - Symphony No. 9",
            "Dvorák - Serenade for Strings in E Major",
            "Ferdinand Beyer - No 8 Synthesia"
            ],
        correct: "Abreu - Tico Tico / Barenboim",
        sound: "sound/lvl7/tico.mp3"
    },
    {
        lvl: 7,
        titles:[
            "Beethoven - Symphony No. 9",
            "Abreu - Tico Tico / Barenboim",
            "Dvorák - Serenade for Strings in E Major",
            "Ferdinand Beyer - No 8 Synthesia"
            ],
        correct: "Beethoven - Symphony No. 9",
        sound: "sound/lvl7/symph9.mp3"
    },
    {
        lvl: 7,
        titles:[
            "Dvorák - Serenade for Strings in E Major",
            "Beethoven - Symphony No. 9",
            "Abreu - Tico Tico / Barenboim",
            "Ferdinand Beyer - No 8 Synthesia"
            ],
        correct: "Dvorák - Serenade for Strings in E Major",
        sound: "sound/lvl7/dvorak.mp3"
    },
    {
        lvl: 7,
        titles:[
            "Ferdinand Beyer - No 8 Synthesia",
            "Dvorák - Serenade for Strings in E Major",
            "Beethoven - Symphony No. 9",
            "Abreu - Tico Tico / Barenboim"
            ],
        correct: "Ferdinand Beyer - No 8 Synthesia",
        sound: "sound/lvl7/ferdinand.mp3"
    },
    {
        lvl: 7,
        titles:[
            "Lakmé de Delibes - Flower duet",
            "Francisco Tárrega - Gran Vals",
            "Johannes Brahms - Hungarian Dance No. 5",
            "Karl Jenkins- Palladio"
            ],
        correct: "Lakmé de Delibes - Flower duet",
        sound: "sound/lvl7/flower.mp3"
    },
    {
        lvl: 7,
        titles:[
            "Francisco Tárrega - Gran Vals",
            "Lakmé de Delibes - Flower duet",
            "Johannes Brahms - Hungarian Dance No. 5",
            "Karl Jenkins- Palladio"
            ],
        correct: "Francisco Tárrega - Gran Vals",
        sound: "sound/lvl7/gran.mp3"
    },
    {
        lvl: 7,
        titles:[
            "Johannes Brahms - Hungarian Dance No. 5",
            "Francisco Tárrega - Gran Vals",
            "Lakmé de Delibes - Flower duet",
            "Karl Jenkins- Palladio"
            ],
        correct: "Johannes Brahms - Hungarian Dance No. 5",
        sound: "sound/lvl7/dance.mp3"
    },
    {
        lvl: 7,
        titles:[
            "Karl Jenkins- Palladio",
            "Johannes Brahms - Hungarian Dance No. 5",
            "Francisco Tárrega - Gran Vals",
            "Lakmé de Delibes - Flower duet"
            ],
        correct: "Karl Jenkins- Palladio",
        sound: "sound/lvl7/palladio.mp3"
    },
    {
        lvl: 7,
        titles:[
            "Luigi Boccherini - Minuet - String Quintet",
            "Mozart - Eine kleine nachtmusik",
            "Francisco Tárrega - Gran Vals",
            "Lakmé de Delibes - Flower duet"
            ],
        correct: "Luigi Boccherini - Minuet - String Quintet",
        sound: "sound/lvl7/boccherini.mp3"
    },
    {
        lvl: 7,
        titles:[
            "Mozart - Eine kleine nachtmusik",
            "Luigi Boccherini - Minuet - String Quintet",
            "Francisco Tárrega - Gran Vals",
            "Lakmé de Delibes - Flower duet"
            ],
        correct: "Mozart - Eine kleine nachtmusik",
        sound: "sound/lvl7/mozart.mp3"
    },
    {
        lvl: 8,
        titles:[
            "Bach - Minuet in G Major",
            "Offenbach - Can Can Music",
            "Rachmaninoff - Prelude in C Sharp Minor",
            "Samuel Barber - Adagio for Strings"
            ],
        correct: "Bach - Minuet in G Major",
        sound: "sound/lvl8/bach.mp3"
    },
    {
        lvl: 8,
        titles:[
            "Offenbach - Can Can Music",
            "Bach - Minuet in G Major",
            "Rachmaninoff - Prelude in C Sharp Minor",
            "Samuel Barber - Adagio for Strings"
            ],
        correct: "Offenbach - Can Can Music",
        sound: "sound/lvl8/offenbach.mp3"
    },
    {
        lvl: 8,
        titles:[
            "Rachmaninoff - Prelude in C Sharp Minor",
            "Offenbach - Can Can Music",
            "Bach - Minuet in G Major",
            "Samuel Barber - Adagio for Strings"
            ],
        correct: "Rachmaninoff - Prelude in C Sharp Minor",
        sound: "sound/lvl8/rach-prelude.mp3"
    },
    {
        lvl: 8,
        titles:[
            "Samuel Barber - Adagio for Strings",
            "Rachmaninoff - Prelude in C Sharp Minor",
            "Offenbach - Can Can Music",
            "Bach - Minuet in G Major"
            ],
        correct: "Samuel Barber - Adagio for Strings",
        sound: "sound/lvl8/adagio.mp3"
    },
    {
        lvl: 8,
        titles:[
            "Rachmaninoff - Piano Concerto No.3",
            "Tchaikovsky - Russian Dance",
            "Strauss II - Tritsch-Tratsch-Polka",
            "Charles Valentin Alkan - Le Festin D'esope"
            ],
        correct: "Rachmaninoff - Piano Concerto No.3",
        sound: "sound/lvl8/rach-concert.mp3"
    },
    {
        lvl: 8,
        titles:[
            "Tchaikovsky - Russian Dance",
            "Rachmaninoff - Piano Concerto No.3",
            "Strauss II - Tritsch-Tratsch-Polka",
            "Charles Valentin Alkan - Le Festin D'esope"
            ],
        correct: "Tchaikovsky - Russian Dance",
        sound: "sound/lvl8/tchai-dance.mp3"
    },
    {
        lvl: 8,
        titles:[
            "Strauss II - Tritsch-Tratsch-Polka",
            "Tchaikovsky - Russian Dance",
            "Rachmaninoff - Piano Concerto No.3",
            "Charles Valentin Alkan - Le Festin D'esope"
            ],
        correct: "Strauss II - Tritsch-Tratsch-Polka",
        sound: "sound/lvl8/strauss.mp3"
    },
    {
        lvl: 8,
        titles:[
            "Charles Valentin Alkan - Le Festin D'esope",
            "Strauss II - Tritsch-Tratsch-Polka",
            "Tchaikovsky - Russian Dance",
            "Rachmaninoff - Piano Concerto No.3"
            ],
        correct: "Charles Valentin Alkan - Le Festin D'esope",
        sound: "sound/lvl8/alkan.mp3"
    },
    {
        lvl: 8,
        titles:[
            "Tchaikovsky - Violin Concerto In D Major",
            "Strauss II - Tritsch-Tratsch-Polka",
            "Schumann - The Smuggler",
            "Rachmaninoff - Piano Concerto No.3"
            ],
        correct: "Tchaikovsky - Violin Concerto In D Major",
        sound: "sound/lvl8/violin.mp3"
    },
    {
        lvl: 8,
        titles:[
            "Schumann - The Smuggler",
            "Tchaikovsky - Violin Concerto In D Major",
            "Strauss II - Tritsch-Tratsch-Polka",
            "Rachmaninoff - Piano Concerto No.3"
            ],
        correct: "Schumann - The Smuggler",
        sound: "sound/lvl8/schumann.mp3"
    },
    {
        lvl: 9,
        titles:[
            "Beethoven - Symphony No. 6",
            "Beethoven - Sonata Pathetique Op. 13",
            "Émile Waldteufel - The Skater's Waltz, Op. 183",
            "Franz von Suppé - Light Cavalry"
            ],
        correct: "Beethoven - Symphony No. 6",
        sound: "sound/lvl9/beethoven.mp3"
    },
    {
        lvl: 9,
        titles:[
            "Beethoven - Sonata Pathetique Op. 13",
            "Beethoven - Symphony No. 6",
            "Émile Waldteufel - The Skater's Waltz, Op. 183",
            "Franz von Suppé - Light Cavalry"
            ],
        correct: "Beethoven - Sonata Pathetique Op. 13",
        sound: "sound/lvl9/path.mp3"
    },
    {
        lvl: 9,
        titles:[
            "Émile Waldteufel - The Skater's Waltz, Op. 183",
            "Beethoven - Sonata Pathetique Op. 13",
            "Beethoven - Symphony No. 6",
            "Franz von Suppé - Light Cavalry"
            ],
        correct: "Émile Waldteufel - The Skater's Waltz, Op. 183",
        sound: "sound/lvl9/skater.mp3"
    },
    {
        lvl: 9,
        titles:[
            "Franz von Suppé - Light Cavalry",
            "Émile Waldteufel - The Skater's Waltz, Op. 183",
            "Beethoven - Sonata Pathetique Op. 13",
            "Beethoven - Symphony No. 6"
            ],
        correct: "Franz von Suppé - Light Cavalry",
        sound: "sound/lvl9/franz.mp3"
    },
    {
        lvl: 9,
        titles:[
            "Georges Bizet - Les Toreadors",
            "Grieg - Piano Concerto",
            "Strauss II - Voices of Spring Waltz",
            "Tchaikovsky - Serenade for Strings Op 48"
            ],
        correct: "Georges Bizet - Les Toreadors",
        sound: "sound/lvl9/bizet.mp3"
    },
    {
        lvl: 9,
        titles:[
            "Grieg - Piano Concerto",
            "Georges Bizet - Les Toreadors",
            "Strauss II - Voices of Spring Waltz",
            "Tchaikovsky - Serenade for Strings Op 48"
            ],
        correct: "Grieg - Piano Concerto",
        sound: "sound/lvl9/grieg.mp3"
    },
    {
        lvl: 9,
        titles:[
            "Strauss II - Voices of Spring Waltz",
            "Grieg - Piano Concerto",
            "Georges Bizet - Les Toreadors",
            "Tchaikovsky - Serenade for Strings Op 48"
            ],
        correct: "Strauss II - Voices of Spring Waltz",
        sound: "sound/lvl9/strauss.mp3"
    },
    {
        lvl: 9,
        titles:[
            "Tchaikovsky - Serenade for Strings Op 48",
            "Strauss II - Voices of Spring Waltz",
            "Grieg - Piano Concerto",
            "Georges Bizet - Les Toreadors"
            ],
        correct: "Tchaikovsky - Serenade for Strings Op 48",
        sound: "sound/lvl9/serenade.mp3"
    },
    {
        lvl: 9,
        titles:[
            "Grieg - Peer Gynt",
            "Strauss II - Voices of Spring Waltz",
            "Grieg - Piano Concerto",
            "Georges Bizet - Les Toreadors"
            ],
        correct: "Grieg - Peer Gynt",
        sound: "sound/lvl9/grieg2.mp3"
    },
    {
        lvl: 10,
        titles:[
            "Gioachino Rossini - The Barber Of Seville",
            "Joseph Haydn - Cello Concerto No. 1",
            "Handel - Halvorsen Passacaglia",
            "Maurice Ravel - Bolero"
            ],
        correct: "Gioachino Rossini - The Barber Of Seville",
        sound: "sound/lvl10/rossini.mp3"
    },
    {
        lvl: 10,
        titles:[
            "Joseph Haydn - Cello Concerto No. 1",
            "Gioachino Rossini - The Barber Of Seville",
            "Handel - Halvorsen Passacaglia",
            "Maurice Ravel - Bolero"
            ],
        correct: "Joseph Haydn - Cello Concerto No. 1",
        sound: "sound/lvl10/cello.mp3"
    },
    {
        lvl: 10,
        titles:[
            "Handel - Halvorsen Passacaglia",
            "Joseph Haydn - Cello Concerto No. 1",
            "Gioachino Rossini - The Barber Of Seville",
            "Maurice Ravel - Bolero"
            ],
        correct: "Handel - Halvorsen Passacaglia",
        sound: "sound/lvl10/passacaglia.mp3"
    },
    {
        lvl: 10,
        titles:[
            "Maurice Ravel - Bolero",
            "Handel - Halvorsen Passacaglia",
            "Joseph Haydn - Cello Concerto No. 1",
            "Gioachino Rossini - The Barber Of Seville"
            ],
        correct: "Maurice Ravel - Bolero",
        sound: "sound/lvl10/ravel.mp3"
    },
    {
        lvl: 10,
        titles:[
            "Johann Strauss - Radetzky March",
            "Richard Wagner - The ride of the Valkyries",
            "Sibelius - Andante festivo",
            "Paul Abraham Dukas - Sorcerer's Apprentice"
            ],
        correct: "Johann Strauss - Radetzky March",
        sound: "sound/lvl10/march.mp3"
    },
    {
        lvl: 10,
        titles:[
            "Richard Wagner - The ride of the Valkyries",
            "Johann Strauss - Radetzky March",
            "Sibelius - Andante festivo",
            "Paul Abraham Dukas - Sorcerer's Apprentice"
            ],
        correct: "Richard Wagner - The ride of the Valkyries",
        sound: "sound/lvl10/ride.mp3"
    },
    {
        lvl: 10,
        titles:[
            "Sibelius - Andante festivo",
            "Richard Wagner - The ride of the Valkyries",
            "Johann Strauss - Radetzky March",
            "Paul Abraham Dukas - Sorcerer's Apprentice"
            ],
        correct: "Sibelius - Andante festivo",
        sound: "sound/lvl10/sibelius.mp3"
    },
    {
        lvl: 10,
        titles:[
            "Paul Abraham Dukas - Sorcerer's Apprentice",
            "Sibelius - Andante festivo",
            "Richard Wagner - The ride of the Valkyries",
            "Johann Strauss - Radetzky March"
            ],
        correct: "Paul Abraham Dukas - Sorcerer's Apprentice",
        sound: "sound/lvl10/paul.mp3"
    },
    {
        lvl: 10,
        titles:[
            "Verdi - Grand March",
            "Sibelius - Andante festivo",
            "Richard Wagner - The ride of the Valkyries",
            "Johann Strauss - Radetzky March"
            ],
        correct: "Verdi - Grand March",
        sound: "sound/lvl10/verdi.mp3"
    },
]
 
async function seedDB() {
    await Raund.remove({});
    console.log("raunds removed");
    await Player.remove({});
    console.log("players removed");
    let counter = 0;
    for(const seed of data) {
        counter++;
        let raund = await Raund.create(seed);
        raund.save();
    }
    console.log(counter);
}

module.exports = seedDB;