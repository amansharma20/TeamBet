import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import commonStyles from '../../utils/styles/CommonStyles';
import {icons, SIZES} from '../../constants';
import {useNavigation} from '@react-navigation/core';

const FootballArticlesScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={commonStyles.container}>
      <ScrollView style={styles.body} showsHorizontalScrollIndicator={false}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={icons.backIcon} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={[commonStyles.headerText, {paddingTop: 10}]}>
          Details Match
        </Text>
        <Text style={commonStyles.h4Text}>
          Not sure about the winner of the basketball game? So bet against the
          favorite in a separate quarter! There is a whole betting strategy for
          this. 17 December 2019, 19:30 Betting / Knowledge Base 0 Basketball
          quarter betting is a real outlet for sports betting players who love
          basketball but are wary of betting on the outcome of the entire match.
          Is it possible to win on basketball bets regardless of the final
          results of the match? Consider a quarter-wise basketball betting
          strategy that offers this method. This article was published thanks to
          the "Championship" Betting Academy and FONBET. Study sports betting,
          take tests, earn experience and beat the leaderboard. Outrun the
          editor-in-chief! Basketball betting Basketball is one of the five most
          popular sports among players. It's fast enough. The peculiarities of
          basketball allow you to bet on a handicap in a wide range of points,
          to bet on team and general totals, and in large matches - on
          individual player statistics. A significant advantage of betting in
          basketball is the number of game segments. In football, there are only
          two of them - halves of 45 minutes. In basketball, four quarters of 10
          (Europe) or 12 minutes (USA, Asia) are played. And all of the above
          betting options can be made not only for the main time, but also for
          every half of the meeting, even for every quarter. Before the start of
          the game, you can bet on the handicap or total of the first quarter,
          first half, of the entire game. In live, near the end of each game
          quarter, the player can bet on the next quarter. This will challenge
          you to predict four mini-matches per game instead of one. Players
          place similar bets using a special basketball strategy by quarter.
          Let's consider the components of this strategy. The essence of the
          quarter basketball betting strategy The strategy is based on a simple
          assumption: a team, even a hopeless outsider, can win at least one
          quarter of the favorite. Based on this idea, it makes sense to "catch"
          that very potentially winning quarter for this team. That is, the
          basketball quarter betting strategy is based on catch-up. You are
          catching up with the quarter result you need in live basketball. This
          strategy has the following advantages: it is extremely rare for an
          outsider to lose all 4 quarters, even with a clear advantage in favor
          of the opponent, after wins in the first and second quarters, the
          favorite tends to "loosen his grip", sometimes even to give rest to
          the best players, and a motivated outsider gnaws out a victory in the
          quarter, Bookmakers do not always correctly assess the level of
          opponents, set handicaps, and this can be used in strategy bets. Since
          it is initially impossible to guess which quarter will be the winning
          one, use the catch-up method when distributing the game bank for the
          match. Bet on the underdog to win in the first quarter. If the bet has
          not entered, then increase the size of the bet on winning in the
          second quarter by two and a half times. Calculate the amount of each
          next bet using the formula: (current loss + target profit) / (odds -
          1). If your team takes at least one quarter, then you will get back
          what you spent and make a profit equal to the first bet. If your team
          loses all four quarters, continue in another match. Proponents of the
          basketball betting strategy talk about the need for match selection
          and strict adherence to money management. When choosing matches for a
          strategy, they advise paying attention to teams underestimated by
          bookmakers, about equal in terms of the level of rivals, insider
          information, such as the absence of leaders on the floor in the
          upcoming match, the presence of injuries among leading players, etc.
          You also need to monitor the odds that bookmakers offer for teams and
          the first quarter before the match, and for the odds for the quarters
          during the match. If you choose a coefficient lower than 1.80 at a
          distance, even a large number of guessed and “caught” quarters will
          not give a profit to the player. In most bookmakers, the bet on a
          quarter is doubles, and often the odds for both options are
          approximately equal. Therefore, players are looking for the most
          attractive bookmakers in terms of coefficient. Also, the bookmaker
          gives a quarter handicap. The strategy can use handicap bets instead
          of a pure outcome. In this case, choose the size of the handicap for
          which an acceptable coefficient is given. How to bet on a basketball
          betting strategy by quarters Consider an example of a single match for
          a basketball strategy bet by quarters. Let it be "Chicago" - "Denver".
          For the first quarter, a handicap of -1.5 / + 1.5 points is given for
          an odds of 1.80. You want to bet according to the strategy and bet 100
          rubles on Denver. The first quarter is won by "Chicago" with a score
          of 32:28. The handicap does not pass. For the second quarter, the
          bookmaker gives the same handicap with the same odds. Again bet on
          Denver, calculating the amount of the bet using the formula: (100 +
          100) / (1.80 - 1) = 250 rubles. The second quarter ends 25:23 - you
          lose again. Cursing, you get 562.5 rubles out of your pocket and
          charge the handicap (+2.5) to Denver in the third quarter for 1.80.
          Your fortitude is rewarded
        </Text>
      </ScrollView>
    </View>
  );
};

export default FootballArticlesScreen;

const styles = StyleSheet.create({
  body: {
    padding: SIZES.paddingHorizontal,
  },
  backIcon: {width: 20, height: 20, resizeMode: 'cover'},
});
