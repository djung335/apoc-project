// src/App.js
import React, { useState } from 'react';
import { ChakraProvider, Box, Container, Text, Link, VStack, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import MovieCard from './components/MovieCard';

const movies = [
  {
    id: 1,
    title: 'The Book of Eli',
    summary: "In The Book of Eli, the protagonist Eli's journey and the significance of the Bible in a post-apocalyptic world underscore the enduring power of faith and optimism. In a world ravaged by chaos and despair, Eli carries the last known copy of the Bible, viewing it as a source of hope and guidance. His unwavering commitment to protecting and preserving the sacred text becomes a symbol of resilience and spiritual fortitude. Eli's journey is not just a physical quest but a spiritual one, illustrating that even in a bleak and desolate landscape, individuals can find meaning and purpose through faith. The existence of the Bible in this dystopian setting serves as a testament to the human capacity for hope, resilience, and the belief in a better future, emphasizing that, even in the face of seemingly insurmountable challenges, faith can endure as a guiding light toward optimism and redemption.",
    themes: 'Survival, Faith, Dystopia',
    youtubeLink: 'https://www.youtube.com/embed/KJVuqYkI2jQ',
    discussion: "Yes"
  },
  {
    id: 2,
    title: 'The Seventh Seal',
    summary: "The Seventh Seal by Ingmar Bergman conveys the profound message that human connections and relationships are central to a fulfilling life, even in the face of numerous hardships. Set against the backdrop of the Black Death in medieval Europe, the film follows the journey of a disillusioned knight, Antonius Block, who engages in a game of chess with Death. Amid the existential questions and trials faced by the characters, the film emphasizes the importance of human warmth and connection. The relationships formed, particularly that between Block and his squire Jöns, become a source of solace and meaning in a world fraught with suffering and uncertainty. The film suggests that, despite the inevitability of death and the challenges of existence, it is through shared experiences, compassion, and genuine connections with others that individuals find purpose and fulfillment. In The Seventh Seal, human bonds emerge as the antidote to the existential angst, highlighting the enduring value of interpersonal relationships in the face of life's adversities.",
    themes: 'Existentialism, Death, Faith',
    youtubeLink: 'https://www.youtube.com/watch?v=Bf01riuiJWA',
    discussion: "Exit Music (For a Film) by Radiohead and The Seventh Seal converge on existential themes of mortality and the quest for meaning. In Radiohead's song, the urgency to escape oppressive circumstances intertwines with a poignant acknowledgment of life's brevity, mirroring the existential desire for personal freedom. Meanwhile, The Seventh Seal navigates a medieval world gripped by the Black Death, as its protagonist, Antonius Block, engages in a symbolic chess match with Death, contemplating the purpose of life and the existence of God. Both the song and the film share a somber reflection on the transient nature of existence, capturing the human struggle to find significance in the face of uncertainty and mortality."
  },
  {
    id: 3,
    title: 'The Day the Earth Stood Still',
    summary: "The Day the Earth Stood Still is optimistic about humanity's future through the character of Klaatu and his relationship with Bobby, embodying hope despite Klaatu's formidable power. Klaatu, an extraterrestrial messenger, arrives on Earth with the potential for devastating consequences. However, as the narrative unfolds, Klaatu develops a unique bond with Bobby, a young boy. This connection humanizes Klaatu, revealing his ability to recognize the innocence and potential for good in humanity. The film suggests that genuine, empathetic relationships, particularly those formed with the younger generation, hold the key to understanding and bridging the gap between different species or perspectives. Through Bobby, Klaatu sees the positive aspects of humanity, fostering optimism about the capacity for growth, understanding, and cooperation. The film implies that even in the face of immense power imbalances, the potential for positive change lies in the ability to form connections and appreciate the inherent goodness in people, offering a hopeful outlook on humanity's future.",
    themes: 'Aliens, Environmentalism, Peace',
    youtubeLink: 'https://www.youtube.com/embed/HVEV4A8CMjE',
    discussion: "Yes"
  },
  
  {
    id: 4,
    title: 'Apocalypse Now',
    summary: "Apocalypse Now masterfully conveys the message that in the breakdown of societal order, individuals can deviate from norms, particularly in the context of war, which is depicted as a cruel and dehumanizing force. The film, set during the Vietnam War, explores the psychological impact of conflict on individuals and the erosion of moral boundaries. As the characters navigate the chaos and absurdity of war, some succumb to the brutality, exemplifying the capacity for individuals to act out of line when confronted with the extremities of combat. However, amidst the darkness, there is a glimmer of hope that level-headed approaches, such as Captain Willard's mission to terminate Colonel Kurtz, can ultimately prevail. The film suggests that rationality and a sense of order have the potential to triumph over the chaos of war, offering a nuanced perspective on the human condition and the choices people make in the face of extreme circumstances.",
    themes: 'War, Madness, Imperialism',
    youtubeLink: 'https://www.youtube.com/embed/FTjG-Aux_yQ',
    discussion: "Yes"
  },
  {
    id: 5,
    title: 'Independence Day',
    summary: '"Independence Day" serves as a reminder of the capability of humanity to cooperate when faced with an existential threat, transcending the often divisive nature of our world. In the film, Earth unites against a common enemy—the extraterrestrial invaders. Despite geopolitical tensions and conflicts, the shared realization that the survival of the entire human race is at stake prompts nations to set aside their differences and collaborate in a global effort to repel the invaders. The film accentuates the innate human instinct to come together in times of crisis, emphasizing that our collective strength lies in unity. While real-world conflicts persist, "Independence Day" highlights the potential for cooperation and solidarity to prevail, illustrating that even in the face of external threats, the common bonds that connect us can outweigh the divisions that often dominate our daily lives.',
    themes: 'Alien Invasion, Independence, Unity',
    youtubeLink: 'https://www.youtube.com/embed/NZZvtQtdbzM',
    discussion: "Yes"
  },
  {
    id: 6,
    title: 'Smoke Signals',
    summary: "Smoke Signals explores the delicate balance between preserving traditions and acknowledging the need to let go of harmful aspects of the past. The film, directed by Chris Eyre and based on Sherman Alexie's short stories, follows two Native American men, Victor and Thomas, on a journey that forces them to confront their shared history and personal struggles. Through their experiences, the movie underscores the importance of preserving cultural traditions that hold significant value, such as storytelling, as a means of passing down knowledge and fostering community bonds. However, Smoke Signals also delves into the idea that not all aspects of the past are worth preserving. It suggests that some traditions or attitudes may be detrimental, hindering personal and collective growth. The characters grapple with the impact of negative elements from their shared history, emphasizing the necessity of breaking free from cycles of pain and dysfunction. In this way, the film advocates for a nuanced perspective on tradition – one that involves critical reflection and a willingness to discard harmful aspects, ensuring that cultural practices evolve in a way that promotes healing, understanding, and positive change. Smoke Signals communicates the idea that the healthiest way to honor one's heritage is to selectively carry forward traditions that contribute positively to individual and communal well-being while shedding those that perpetuate harm.",
    themes: 'Identity, Friendship, Family',
    youtubeLink: 'https://www.youtube.com/watch?v=MbexuTkfejw',
    discussion: "In Elton John's song Goodbye Yellow Brick Road, the theme centers around disillusionment with fame and a longing for a simpler, more authentic life. The metaphor of saying goodbye to the Yellow Brick Road symbolizes a departure from the glitz and artificiality of the entertainment industry. Similarly, Smoke Signals explores themes of identity, family, and the search for a genuine sense of self within a contemporary Native American context. The characters, Thomas and Victor, embark on a journey to retrieve the ashes of Victor's estranged father, reflecting a quest for cultural roots and personal understanding. Both works touch upon the theme of rejecting societal expectations and seeking authenticity, whether it's in the context of the music industry or the Native American experience."
  },
  {
    id: 7,
    title: 'Blade Runner',
    summary: "Blade Runner conveys the profound message that empathy is a crucial and defining human trait, and it blurs the distinction between humans and replicants. In the dystopian future depicted in the film, replicants, artificial beings designed to serve humans, lack the capacity for authentic emotions. However, as the narrative unfolds, the film subtly challenges this notion by showcasing instances where replicants display a depth of emotion and empathy comparable to, if not surpassing, that of their human counterparts. The protagonist, Rick Deckard, undergoes a transformative journey that prompts him to question the very essence of humanity. The film suggests that empathy, rather than mere physicality, is a key factor in defining what it means to be human. By blurring the line between humans and replicants through the lens of empathy, Blade Runner prompts contemplation on the nature of humanity and the moral implications of creating beings capable of experiencing genuine emotions.",
    themes: 'Dystopia, Artificial Intelligence, Humanity',
    youtubeLink: 'https://www.youtube.com/embed/eogpIG53Cis',
    discussion: "Yes"
  },
  {
    id: 8,
    title: 'Planet of the Apes',
    summary: "The 1968 Planet of the Apes serves as a cautionary tale about the consequences of unchecked xenophobia and the failure to resolve differences among human beings. Set in a future where humans have devastated their own civilization, the film explores a world dominated by intelligent apes. The dystopian narrative suggests that the downfall of human society was fueled by internal conflicts and a lack of understanding among different groups. By portraying a society where humans have become an oppressed minority, the film prompts reflection on the destructive potential of prejudice, fear, and intolerance. It underscores the importance of managing xenophobia, resolving differences, and fostering cooperation to prevent the kind of catastrophic self-destruction depicted in the movie. Planet of the Apes serves as a stark reminder that the failure to address societal divisions and prejudices can lead to disastrous consequences, advocating for the necessity of unity and understanding in the face of potential existential threats.",
    themes: 'Evolution, Society, Prejudice',
    youtubeLink: 'https://www.youtube.com/embed/RFJNcUwYXMQ',
    discussion: "Yes"
  },
  {
    id: 9,
    title: '28 Days Later',
    summary: '28 Days Later effectively conveys a message of hope amidst societal collapse by highlighting the resilience and capacity for compassion within individuals. As the film unfolds in a post-apocalyptic world ravaged by a deadly virus, it showcases the breakdown of social structures and the descent into chaos. However, amidst the desperation, the narrative underscores the strength of human connection and the potential for solidarity. The characters, despite facing unimaginable horrors, form alliances and strive to protect one another. This theme is particularly evident in the relationships that develop between the survivors, emphasizing that even in the bleakest circumstances, the innate human instinct to seek solace and support from one another prevails. By portraying the resilience of the human spirit and the power of communal bonds, "28 Days Later" ultimately suggests that hope endures when people come together in the face of adversity.',
    themes: 'Survival, Infection, Humanity',
    youtubeLink: 'https://www.youtube.com/embed/c7ynwAgQlDQ',
    discussion: "Yes"
  },
  {
    id: 10,
    title: 'The Matrix Reloaded',
    summary: "The Matrix Reloaded conveys a story that is optimistic about humanity's ability to learn from its mistakes and potentially achieve harmony with the world once again. In the film, the war between humans and machines escalates, and Neo, the chosen one, grapples with the responsibility of saving humanity. The narrative suggests that humans, despite their past errors, have the capacity for growth and enlightenment. The character arc of Neo embodies the possibility of transcending limitations and breaking free from a cycle of mistakes. Additionally, the film introduces the concept of choice and free will, emphasizing that individuals have the power to shape their destinies and learn from past missteps. The narrative implies that through understanding, cooperation, and the exercise of free will, humanity can overcome its challenges and potentially coexist harmoniously with both the machine world and the physical realm. Overall, The Matrix Reloaded offers an optimistic perspective on humanity's potential for learning and evolving towards a more harmonious existence.",
    themes: 'Reality, Rebellion, Artificial Intelligence',
    youtubeLink: 'https://www.youtube.com/embed/2KnZac176Hs',
    discussion: "Yes"
  },
];

function App() {
  const [selectedMovie, setSelectedMovie] = useState(movies[0]);

  const handleMovieSelect = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <ChakraProvider>
      <Container maxW="container.md" p={4}>
        <Box mb={8}>
          <Menu>
            <MenuButton as={Link} color="blue.500">
              Movies
            </MenuButton>
            <MenuList>
              {movies.map((movie) => (
                <MenuItem key={movie.id} onClick={() => handleMovieSelect(movie)}>
                  {movie.title}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </Box>
        <MovieCard movie={selectedMovie} />
      </Container>
    </ChakraProvider>
  );
}

export default App;