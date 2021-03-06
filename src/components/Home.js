import React from 'react';
import Interactive from 'react-interactive';
import { Link } from 'react-router-dom';
import { Glyphicon } from 'react-bootstrap';
import { Code } from '../styles/style';
import s from '../styles/home.style';

export default function Home() {
  return (
    <div>
      <p style={s.p}>
        This is a tutorial to build a website for a science project, the steps are
        geared towards the primary sections of a science report: hypothesis, procedure,
        data, and conclusion, but feel free to add as much content as you'd like!
        Hopefully you'll learn some HTML and CSS along the way, and be inspired to
        continue learning more about web development.
      </p>
      <p style={s.p}>
        Check out the example site below to get a better idea of what you'll be
        building, or continue on to Step 1 to get started!
      </p>
      <div style={s.pageLinkContainer}>
        <Interactive
          as={Link}
          to="/example"
        >Example Project: BBQ makes me slow!</Interactive>
      </div>
      <div style={s.p}>
        <span>Lets get started!  </span>
        <Glyphicon glyph='forward'/>
        <Interactive
          as={Link}
          to="/steps/1"
        > Step 1: Project Setup</Interactive>
      </div>
    </div>
  );
}