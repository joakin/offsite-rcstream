import React from 'react'
import EditList from './edit-list'
import SpeedCheckPanel from './speed-check-panel'
import JudgementDayPanel from './judgement-day-panel'
import EditsPerHourPanel from './edits-per-hour-panel'
import Leaderboard from './leaderboard'

export default React.createClass({
  render: function() {
    return (
      <div className="App">
        <EditsPerHourPanel titles={[ "One Direction", "Justin Bieber"]}
          nsTitles={this.props.titles['0']} startTime={this.props.startTime}></EditsPerHourPanel>
        <Leaderboard leaderboard={this.props.leaderboards['*']}></Leaderboard>
        <Leaderboard leaderboard={this.props.leaderboards['enwiki']}></Leaderboard>
        <Leaderboard leaderboard={this.props.leaderboards['user']}></Leaderboard>
        <Leaderboard leaderboard={this.props.leaderboards['bot']}></Leaderboard>
        <JudgementDayPanel botScore={this.props.botScore}></JudgementDayPanel>
        <SpeedCheckPanel speed={this.props.speed}></SpeedCheckPanel>
        <EditList edits={this.props.edits}></EditList>
      </div>
    )
  }
})
