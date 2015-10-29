import React from 'react'
import EditList from './edit-list'
import SpeedCheckPanel from './speed-check-panel'
import JudgementDayPanel from './judgement-day-panel'
import EditsPerHourPanel from './edits-per-hour-panel'
import Leaderboard from './leaderboard'
import Panel from './panel'

export default React.createClass({
  render: function () {
    return (
    <div className="App">
        <Panel title="KPIs" key="KPI">
          <EditsPerHourPanel titles={[ 'One Direction', 'Justin Bieber']}
    nsTitles={this.props.titles['0']} startTime={this.props.startTime}></EditsPerHourPanel>,
          <JudgementDayPanel botScore={this.props.botScore}></JudgementDayPanel>
        </Panel>
        <Panel key="top-edits" title="Top edits (all wikis)">
          <Leaderboard leaderboard={this.props.leaderboards['*']}></Leaderboard>
        </Panel>
        <Panel key="top-edits-enwiki" title="Top edits (enwiki)">
          <Leaderboard leaderboard={this.props.leaderboards['enwiki']}></Leaderboard>
        </Panel>
        <Panel key="top-editors" title="Top editors">
          <Leaderboard leaderboard={this.props.leaderboards['user']}></Leaderboard>
        </Panel>
        <Panel key="top-bots" title="Top bots">
          <Leaderboard leaderboard={this.props.leaderboards['bot']}></Leaderboard>
        </Panel>
        <Panel key="speedos" title="Speedometers">
          <SpeedCheckPanel speed={this.props.speed}></SpeedCheckPanel>
        </Panel>
        <Panel key="edit-list" title="All edits">
          <EditList edits={this.props.edits}></EditList>
        </Panel>
      </div>
    )
  }
})
