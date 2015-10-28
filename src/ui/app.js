import React from 'react'
import EditList from './edit-list'
import SpeedCheckPanel from './speed-check-panel'
import JudgementDayPanel from './judgement-day-panel'
import EditsPerHourPanel from './edits-per-hour-panel'
import Leaderboard from './leaderboard'
import Panel from './panel'

export default React.createClass({
  render: function() {
    return (
      <div className="App">
        <Panel title="KPIs" contents={[
          <EditsPerHourPanel titles={[ "One Direction", "Justin Bieber"]}
            nsTitles={this.props.titles['0']} startTime={this.props.startTime}></EditsPerHourPanel>,
          <JudgementDayPanel botScore={this.props.botScore}></JudgementDayPanel>
        ]}></Panel>
        <Panel title="Top edits (all wikis)"
          contents={<Leaderboard leaderboard={this.props.leaderboards['*']}></Leaderboard>}></Panel>
        <Panel  title="Top edits (enwiki)"
          contents={<Leaderboard leaderboard={this.props.leaderboards['enwiki']}></Leaderboard>}></Panel>
        <Panel  title="Top editors"
          contents={<Leaderboard leaderboard={this.props.leaderboards['user']}></Leaderboard>}></Panel>
        <Panel title="Top bots"
          contents={<Leaderboard leaderboard={this.props.leaderboards['bot']}></Leaderboard>}></Panel>
        <Panel title="Speedometers"
          contents={<SpeedCheckPanel speed={this.props.speed}></SpeedCheckPanel>}></Panel>
        <Panel title="All edits"
          contents={<EditList edits={this.props.edits}></EditList>}></Panel>
      </div>
    )
  }
})
