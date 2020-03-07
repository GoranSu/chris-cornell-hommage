import { Artist } from './../model/artist.model';
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const artists: Artist[] = [
      {
        artistName: 'Audioslave',
        artistAbout: '<p> <a href="https://en.wikipedia.org/wiki/Audioslave" target="_blank">Audioslave</a>' +
        ' was an American rock supergroup formed in Los Angeles, California, in 2001. The four-piece band consisted' +
        ' of Soundgarden lead singer/rhythm guitarist <a routerLink="/cornell">Chris Cornell</a>, and ' +
        ' <a href="https://en.wikipedia.org/wiki/Rage_Against_the_Machine" target="_blank">Rage Against the Machine</a>' +
        ' members <a href="https://en.wikipedia.org/wiki/Tom_Morello" target="_blank">Tom Morello</a> (lead guitar),' +
        ' <a href="https://en.wikipedia.org/wiki/Tim_Commerford" target="_blank">Tim Commerford</a> (bass/backing vocals),' +
        ' and <a href="https://en.wikipedia.org/wiki/Brad_Wilk" target="_blank">Brad Wilk</a> (drums).</p>',
          album: [
            {
            id: '1',
            albumYear: '2002',
            albumTitle: 'Audioslave',
            albumArtwork: '/assets/audioSlave/audioslave.jpg',
            track: [
              { trackNumber: '1', trackName: 'Cochise', trackLength: '' },
              { trackNumber: '2', trackName: 'Show Me How To Live', trackLength: '' },
              { trackNumber: '3', trackName: 'Gasoline', trackLength: '' },
              { trackNumber: '4', trackName: 'What You Are', trackLength: '' },
              { trackNumber: '5', trackName: 'Like A Stone', trackLength: '' },
              { trackNumber: '6', trackName: 'Set It Off', trackLength: '' },
              { trackNumber: '7', trackName: 'Shadow On The Sun', trackLength: '' },
              { trackNumber: '8', trackName: 'I Am The Highway', trackLength: '' },
              { trackNumber: '9', trackName: 'Exploder', trackLength: '' },
              { trackNumber: '10', trackName: 'Hypnotize', trackLength: '' },
              { trackNumber: '11', trackName: 'Bring \'Em Back Alive', trackLength: '' },
              { trackNumber: '12', trackName: 'Light My Way', trackLength: '' },
              { trackNumber: '13', trackName: 'Getaway Car', trackLength: '' },
              { trackNumber: '14', trackName: 'The Last Remaining Light', trackLength: '' }
            ]
            },
            {
              id: '2',
              albumYear: '2005',
              albumTitle: 'Out Of Exile',
              albumArtwork: '/assets/audioSlave/ooe.jpg',
              track: [
                { trackNumber: '1', trackName: 'Your Time Has Come', trackLength: '' },
                { trackNumber: '2', trackName: 'Out Of Exile', trackLength: '' },
                { trackNumber: '3', trackName: 'Be Yourself', trackLength: '' },
                { trackNumber: '4', trackName: 'Doesn\'t Remind Me', trackLength: '' },
                { trackNumber: '5', trackName: 'Drown Me Slowly', trackLength: '' },
                { trackNumber: '6', trackName: 'Heaven\'s Dead', trackLength: '' },
                { trackNumber: '7', trackName: 'The Worm', trackLength: '' },
                { trackNumber: '8', trackName: 'Man Or Animal', trackLength: '' },
                { trackNumber: '9', trackName: 'Yesterday To Tomorrow', trackLength: '' },
                { trackNumber: '10', trackName: 'Dandelion', trackLength: '' },
                { trackNumber: '11', trackName: '#1 Zero', trackLength: '' },
                { trackNumber: '12', trackName: 'The Curse', trackLength: '' }
              ]
            },
            {
              id: '3',
              albumYear: '2006',
              albumTitle: 'Revelations',
              albumArtwork: '/assets/audioSlave/rev.jpg',
              track: [
                { trackNumber: '1', trackName: 'Revelations', trackLength: '' },
                { trackNumber: '2', trackName: 'One And The Same', trackLength: '' },
                { trackNumber: '3', trackName: 'Sound Of A Gun', trackLength: '' },
                { trackNumber: '4', trackName: 'Until We Fall', trackLength: '' },
                { trackNumber: '5', trackName: 'Original Fire', trackLength: '' },
                { trackNumber: '6', trackName: 'Broken City', trackLength: '' },
                { trackNumber: '7', trackName: 'Somedays', trackLength: '' },
                { trackNumber: '8', trackName: 'Shape Of Things To Come', trackLength: '' },
                { trackNumber: '9', trackName: 'Jewel Of The Summertime', trackLength: '' },
                { trackNumber: '10', trackName: 'WtrackNumbere Awake', trackLength: '' },
                { trackNumber: '11', trackName: 'Nothing Left To Say But Goodbye', trackLength: '' },
                { trackNumber: '12', trackName: 'Moth', trackLength: '' },
                { trackNumber: '13', trackName: 'Film By Danny Clinch', trackLength: '' }
              ]
            }
          ]
      },
      {
        artistName: 'Chris Cornell',
        artistAbout: '<p> <a href="https://en.wikipedia.org/wiki/Chris_Cornell" ' +
        ' target="_blank">Chris Cornell</a> (born Christopher John Boyle; July 20, 1964 - May 18, 2017)' +
        ' was an American musician, singer, and songwriter. He was best known as the lead vocalist for the' +
        ' rock bands Soundgarden and Audioslave. Cornell was also known for his numerous solo works and soundtrack' +
        ' contributions since 1991, and as the founder and frontman for Temple of the Dog,' +
        ' the one-off tribute band dedicated to his late friend <a href="https://en.wikipedia.org/wiki/Andrew_Wood_(singer)"' +
        ' target="_blank">Andrew Wood</a>.</p>',
        album: [
          {
          id: '1',
          albumYear: '1999',
          albumTitle: 'Euphoria Morning',
          albumArtwork: '/assets/chrisCornell/euph.jpg',
          track: [
            { trackNumber: '1', trackName: 'Can\'t Change Me', trackLength: '3:23'},
            { trackNumber: '2', trackName: 'Flutter Girl', trackLength: '4:25' },
            { trackNumber: '3', trackName: 'Preaching The End Of The World', trackLength: '4:41' },
            { trackNumber: '4', trackName: 'Follow My Way', trackLength: '5:10' },
            { trackNumber: '5', trackName: 'When I\'m Down', trackLength: '4:20' },
            { trackNumber: '6', trackName: 'Mission', trackLength: '4:05' },
            { trackNumber: '7', trackName: 'Wave Goodbye', trackLength: '3:43' },
            { trackNumber: '8', trackName: 'Moonchild', trackLength: '4:02' },
            { trackNumber: '9', trackName: 'Sweet Euphoria', trackLength: '3:08' },
            { trackNumber: '10', trackName: 'Disappearing One', trackLength: '3:48' },
            { trackNumber: '11', trackName: 'Pillow Of Your Bones', trackLength: '4:29' },
            { trackNumber: '12', trackName: 'Steel Rain', trackLength: '5:41' }
          ]
        },
        {
          id: '2',
          albumYear: '2007',
          albumTitle: 'Carry On',
          albumArtwork: '/assets/chrisCornell/carry.jpg',
          track: [
            { trackNumber: '1', trackName: 'No Such Thing', trackLength: '3:44' },
            { trackNumber: '2', trackName: 'Poison Eye', trackLength: '3:57' },
            { trackNumber: '3', trackName: 'Arms Around Your Love', trackLength: '3:34' },
            { trackNumber: '4', trackName: 'Safe And Sound', trackLength: '4:16' },
            { trackNumber: '5', trackName: 'She\'ll Never Be Your Man', trackLength: '3:24' },
            { trackNumber: '6', trackName: 'Ghosts', trackLength: '3:51' },
            { trackNumber: '7', trackName: 'Killing Birds', trackLength: '3:38' },
            { trackNumber: '8', trackName: 'Billie Jean', trackLength: '4:41' },
            { trackNumber: '9', trackName: 'Scar On The Sky', trackLength: '3:40' },
            { trackNumber: '10', trackName: 'Your Soul Today', trackLength: '3:27' },
            { trackNumber: '11', trackName: 'Finally Forever', trackLength: '3:37' },
            { trackNumber: '12', trackName: 'Silence The Voices', trackLength: '4:27' },
            { trackNumber: '13', trackName: 'Disappearing Act', trackLength: '4:33' },
            { trackNumber: '14', trackName: 'You Know My Name', trackLength: '4:01' }
          ]
        },
        {
          id: '3',
          albumYear: '2009',
          albumTitle: 'Scream',
          albumArtwork: '/assets/chrisCornell/scream.jpg',
          track: [
            { trackNumber: '1', trackName: 'Part Of Me', trackLength: '5:14' },
            { trackNumber: '2', trackName: 'Time', trackLength: '4:39' },
            { trackNumber: '3', trackName: 'Sweet Revenge', trackLength: '4:10' },
            { trackNumber: '4', trackName: 'Get Up', trackLength: '3:35' },
            { trackNumber: '5', trackName: 'Ground Zero', trackLength: '3:09' },
            { trackNumber: '6', trackName: 'Never Far Away', trackLength: '5:06' },
            { trackNumber: '7', trackName: 'Take Me Alive', trackLength: '4:36' },
            { trackNumber: '8', trackName: 'Long Gone', trackLength: '5:15' },
            { trackNumber: '9', trackName: 'Scream', trackLength: '6:14' },
            { trackNumber: '10', trackName: 'Enemy', trackLength: '4:35' },
            { trackNumber: '11', trackName: 'Other StrackNumbere Of Town', trackLength: '4:48' },
            { trackNumber: '12', trackName: 'Climbing Up The Walls', trackLength: '4:48' },
            { trackNumber: '13', trackName: 'Watch Out', trackLength: '4:02' },
            { trackNumber: '14', trackName: 'Two Drink Minimum', trackLength: '3:03' }
          ]
        },
        {
          id: '4',
          albumYear: '2015',
          albumTitle: 'Higher Truth',
          albumArtwork: '/assets/chrisCornell/high.jpg',
          track: [
            { trackNumber: '1', trackName: 'Forgot My Broken Heart', trackLength: '3:54' },
            { trackNumber: '2', trackName: 'Dead Wishes', trackLength: '4:55' },
            { trackNumber: '3', trackName: 'Worried Moon', trackLength: '4:32'},
            { trackNumber: '4', trackName: 'Before We Disappear', trackLength: '3:51' },
            { trackNumber: '5', trackName: 'Through The Window', trackLength: '4:41' },
            { trackNumber: '6', trackName: 'Josephine', trackLength: '3:38' },
            { trackNumber: '7', trackName: 'Murderer Of Blue Skies', trackLength: '3:42' },
            { trackNumber: '8', trackName: 'Higher Truth', trackLength: '5:06' },
            { trackNumber: '9', trackName: 'Let Your Eyes Wander', trackLength: '3:42' },
            { trackNumber: '10', trackName: 'Only These Words', trackLength: '3:29' },
            { trackNumber: '11', trackName: 'Circling', trackLength: '3:28' },
            { trackNumber: '12', trackName: 'Our Time In The Universe', trackLength: '4:19' }
          ]
        },
      ]},
      {
        artistName: 'Soundgarden',
        artistAbout: '<p> <a href="https://en.wikipedia.org/wiki/Soundgarden" target="_blank">Soundgarden</a>' +
        '  was an American rock band formed in Seattle, Washington, in 1984 by singer and rhythm guitarist' +
        'Chris Cornell, lead guitarist <a href="https://en.wikipedia.org/wiki/Kim_Thayil"' +
        'target="_blank">Kim Thayil</a>, and bassist Hiro Yamamoto. <a href="https://en.wikipedia.org/wiki/Matt_Cameron"' +
        'target="_blank">Matt Cameron</a> became the band\'s full-time drummer in 1986, while bassist' +
        '<a href="https://en.wikipedia.org/wiki/Ben_Shepherd"' +
         'target="_blank">Ben Shepherd</a> became a permanent replacement for Yamamoto in 1990.' +
         'Cornell remained in Soundgarden until his death in May 2017, putting the band\'s future in doubt and leaving Thayil' +
         'as the only remaining original member of the band.</p>',
        album: [
          {
          id: '1',
          albumYear: '1988',
          albumTitle: 'Ultramega OK',
          albumArtwork: '/assets/soundGarden/ouk.jpg',
          track: [
            { trackNumber: '1', trackName: 'Flower', trackLength: '' },
            { trackNumber: '2', trackName: 'All Your Lies', trackLength: '' },
            { trackNumber: '3', trackName: '665', trackLength: '' },
            { trackNumber: '4', trackName: 'Beyond The Wheel', trackLength: '' },
            { trackNumber: '5', trackName: '667', trackLength: '' },
            { trackNumber: '6', trackName: 'Mood For Trouble', trackLength: '' },
            { trackNumber: '7', trackName: 'Circle Of Power', trackLength: '' },
            { trackNumber: '8', trackName: 'He DtrackNumbern\'t', trackLength: '' },
            { trackNumber: '9', trackName: 'Smokestack Lightning', trackLength: '' },
            { trackNumber: '10', trackName: 'Nazi Driver', trackLength: '' },
            { trackNumber: '11', trackName: 'Head Injury', trackLength: '' },
            { trackNumber: '12', trackName: 'Incessant Mace', trackLength: '' },
            { trackNumber: '13', trackName: 'One Minute Of Silence', trackLength: '' }
          ]
        },
        {
          id: '2',
          albumYear: '1989',
          albumTitle: 'Louder Than Love',
          albumArtwork: '/assets/soundGarden/loud.png',
          track: [
            { trackNumber: '1', trackName: 'Truth', trackLength: '' },
            { trackNumber: '2', trackName: 'Hands All Over', trackLength: '' },
            { trackNumber: '3', trackName: 'Gun', trackLength: '' },
            { trackNumber: '4', trackName: 'Power Trip', trackLength: '' },
            { trackNumber: '5', trackName: 'Get on the Snake', trackLength: '' },
            { trackNumber: '6', trackName: 'Full on Kevin\'s Mom', trackLength: '' },
            { trackNumber: '7', trackName: 'Loud Love', trackLength: '' },
            { trackNumber: '8', trackName: 'I Awake', trackLength: '' },
            { trackNumber: '9', trackName: 'No Wrong No Right', trackLength: '' },
            { trackNumber: '10', trackName: 'Uncovered', trackLength: '' },
            { trackNumber: '11', trackName: 'Big Dumb Sex', trackLength: '' },
            { trackNumber: '12', trackName: 'Full On (Reprise)', trackLength: '' }
          ]
        },
        {
          id: '3',
          albumYear: '1991',
          albumTitle: 'Badmotorfinger',
          albumArtwork: '/assets/soundGarden/bad.jpg',
          track: [
            { trackNumber: '1', trackName: 'Rusty Cage', trackLength: '' },
            { trackNumber: '2', trackName: 'Outshined', trackLength: '' },
            { trackNumber: '3', trackName: 'Slaves & Bulldozers', trackLength: '' },
            { trackNumber: '4', trackName: 'Jesus Christ Pose', trackLength: '' },
            { trackNumber: '5', trackName: 'Face Pollution', trackLength: '' },
            { trackNumber: '6', trackName: 'Somewhere', trackLength: '' },
            { trackNumber: '7', trackName: 'Searching With My Good Eye Closed', trackLength: '' },
            { trackNumber: '8', trackName: 'Room A Thousand Years WtrackNumbere', trackLength: '' },
            { trackNumber: '9', trackName: 'Mind Riot' , trackLength: ''},
            { trackNumber: '10', trackName: 'Drawing Flies', trackLength: '' },
            { trackNumber: '11', trackName: 'Holy Water', trackLength: '' },
            { trackNumber: '12', trackName: 'New Damage', trackLength: '' }
          ]
        },
        {
          id: '4',
          albumYear: '1994',
          albumTitle: 'Superunknown',
          albumArtwork: '/assets/soundGarden/super.jpg',
          track: [
            { trackNumber: '1', trackName: 'Let Me Drown', trackLength: '' },
            { trackNumber: '2', trackName: 'My Wave', trackLength: '' },
            { trackNumber: '3', trackName: 'Fell On Black Days', trackLength: '' },
            { trackNumber: '4', trackName: 'Mailman', trackLength: '' },
            { trackNumber: '5', trackName: 'Superunknown', trackLength: '' },
            { trackNumber: '6', trackName: 'Head Down', trackLength: '' },
            { trackNumber: '7', trackName: 'Black Hole Sun', trackLength: '' },
            { trackNumber: '8', trackName: 'Spoonman' , trackLength: ''},
            { trackNumber: '9', trackName: 'Limo Wreck', trackLength: '' },
            { trackNumber: '10', trackName: 'The Day I Tried To Live', trackLength: '' },
            { trackNumber: '11', trackName: 'Kickstand', trackLength: '' },
            { trackNumber: '12', trackName: 'Fresh Tendrils' , trackLength: ''},
            { trackNumber: '13', trackName: '4th Of July', trackLength: '' },
            { trackNumber: '14', trackName: 'Half', trackLength: '' },
            { trackNumber: '15', trackName: 'Like Suicide', trackLength: '' }
          ]
        },
        {
          id: '5',
          albumYear: '1996',
          albumTitle: 'Down on the Upside',
          albumArtwork: '/assets/soundGarden/down.jpg',
          track: [
            { trackNumber: '1', trackName: 'Pretty Noose', trackLength: '' },
            { trackNumber: '2', trackName: 'Rhinosaur', trackLength: '' },
            { trackNumber: '3', trackName: 'Zero Chance', trackLength: '' },
            { trackNumber: '4', trackName: 'Dusty', trackLength: '' },
            { trackNumber: '5', trackName: 'Ty Cobb', trackLength: '' },
            { trackNumber: '6', trackName: 'Blow Up The OutstrackNumbere World', trackLength: '' },
            { trackNumber: '7', trackName: 'Burden In My Hand', trackLength: '' },
            { trackNumber: '8', trackName: 'Never Named', trackLength: '' },
            { trackNumber: '9', trackName: 'Applebite', trackLength: '' },
            { trackNumber: '10', trackName: 'Never The Machine Forever', trackLength: '' },
            { trackNumber: '11', trackName: 'Tighter & Tighter', trackLength: '' },
            { trackNumber: '12', trackName: 'No Attention', trackLength: '' },
            { trackNumber: '13', trackName: 'Switch Opens', trackLength: '' },
            { trackNumber: '14', trackName: 'Overfloater', trackLength: '' },
            { trackNumber: '15', trackName: 'An Unkind', trackLength: '' },
            { trackNumber: '16', trackName: 'Boot Camp', trackLength: ''}
          ]
        },
        {
          id: '6',
          albumYear: '2012',
          albumTitle: 'King Animal',
          albumArtwork: '/assets/soundGarden/king.jpg',
          track: [
            { trackNumber: '1', trackName: 'Been Away Too Long', trackLength: '' },
            { trackNumber: '2', trackName: 'Non-State Actor', trackLength: '' },
            { trackNumber: '3', trackName: 'By Crooked Steps', trackLength: '' },
            { trackNumber: '4', trackName: 'A Thousand Days Before', trackLength: '' },
            { trackNumber: '5', trackName: 'Blood On The Valley Floor', trackLength: '' },
            { trackNumber: '6', trackName: 'Bones Of Birds', trackLength: '' },
            { trackNumber: '7', trackName: 'Taree', trackLength: '' },
            { trackNumber: '8', trackName: 'Attrition', trackLength: '' },
            { trackNumber: '9', trackName: 'Black Saturday', trackLength: '' },
            { trackNumber: '10', trackName: 'Halfway There', trackLength: '' },
            { trackNumber: '11', trackName: 'Worse Dreams', trackLength: '' },
            { trackNumber: '12', trackName: 'EyeltrackNumber\'s Mouth', trackLength: '' },
            { trackNumber: '13', trackName: 'Rowing', trackLength: '' }
          ]
        },
      ]},
      {

        artistName: 'Temple of the dog',
        artistAbout: '<p> <a href="https://en.wikipedia.org/wiki/Temple_of_the_Dog"' +
        'target="_blank">Temple of the Dog</a> was an American rock band that formed in Seattle,' +
        ' Washington in 1990. It was conceived by vocalist Chris Cornell of Soundgarden' +
        ' as a tribute to his friend, the late Andrew Wood, lead singer of the bands Malfunkshun' +
        ' and Mother Love Bone. The line-up includes Stone Gossard on rhythm guitar, Jeff Ament on' +
        ' bass guitar (both ex-members of Mother Love Bone), Mike McCready on lead guitar,' +
        ' and Matt Cameron on drums. Eddie Vedder appeared as a guest to provide some lead and backing vocals.</p>',
        album: [
          {
          id: '1',
          albumYear: '1991',
          albumTitle: 'Temple of the dog',
          albumArtwork: '/assets/templeOfTheDog/ttod.jpg',
          track:
          [
          { trackNumber: '1', trackName: 'Say Hello 2 Heaven', trackLength: '' },
          { trackNumber: '2', trackName: 'Reach Down', trackLength: '' },
          { trackNumber: '3', trackName: 'Hunger Strike', trackLength: '' },
          { trackNumber: '4', trackName: 'Pushin\' Forward Back', trackLength: '' },
          { trackNumber: '5', trackName: 'Call Me A Dog', trackLength: '' },
          { trackNumber: '6', trackName: 'Times Of Trouble', trackLength: '' },
          { trackNumber: '7', trackName: 'Wooden Jesus', trackLength: '' },
          { trackNumber: '8', trackName: 'Your Saviour', trackLength: '' },
          { trackNumber: '9', trackName: 'Four Walled World', trackLength: '' },
          { trackNumber: '10', trackName: 'All Night Thing', trackLength: '' }
          ]
        }
      ]}
    ];
    return {artists};
  }
}
