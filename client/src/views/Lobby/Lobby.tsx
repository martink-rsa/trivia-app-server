import { FormEvent } from 'react';
import * as S from './Lobby.style';

import ViewWrapper from '../../components/ViewWrapper/ViewWrapper';
import MainContainer from '../../components/MainContainer/MainContainer';
import Button from '../../components/Button/Button';
import PlayerDisplay from '../../components/PlayerDisplay/PlayerDisplay';
import Player from '../../shared/Player';

type Props = {
  players: Player[];
  onSubmit: (numberQuestions: number, subject: string) => void;
};

/** The Lobby screen that shows all the players and leads
 * to the main game
 */
function Lobby({ players, onSubmit }: Props) {
  /**
   * Submits the user's details
   * @param event The Form event
   */
  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    onSubmit(20, 'javascript');
  };

  const handleChange = (event: any) => {
    console.log('Handling change');
  };

  return (
    <ViewWrapper>
      <MainContainer>
        <S.PlayersList>
          {players.map((player) => (
            <PlayerDisplay key={player.username} player={player} />
          ))}
        </S.PlayersList>
      </MainContainer>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="numQuestions">Questions:</label>
          <S.Input
            type="number"
            id="numQuestions"
            min="1"
            max="99"
            value="20"
            onChange={handleChange}
          />
        </div>
        <S.Select>
          <option>Test</option>
        </S.Select>
        <Button type="submit" fullWidth>
          START
        </Button>
      </form>
    </ViewWrapper>
  );
}

export default Lobby;
