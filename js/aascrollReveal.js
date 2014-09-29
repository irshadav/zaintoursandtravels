




<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>julianlloyd/scrollReveal.js</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <meta property="fb:app_id" content="1401488693436528"/>

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="julianlloyd/scrollReveal.js" name="twitter:title" /><meta content="scrollReveal.js - Declarative on-scroll reveal animations." name="twitter:description" /><meta content="https://0.gravatar.com/avatar/aed4fb020e0187df35e76c57e1c27630?d=https%3A%2F%2Fidenticons.github.com%2Ff7e09cdd44c15e03f09f19b5018230e2.png&amp;r=x&amp;s=400" name="twitter:image:src" />
<meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://0.gravatar.com/avatar/aed4fb020e0187df35e76c57e1c27630?d=https%3A%2F%2Fidenticons.github.com%2Ff7e09cdd44c15e03f09f19b5018230e2.png&amp;r=x&amp;s=400" property="og:image" /><meta content="julianlloyd/scrollReveal.js" property="og:title" /><meta content="https://github.com/julianlloyd/scrollReveal.js" property="og:url" /><meta content="scrollReveal.js - Declarative on-scroll reveal animations." property="og:description" />

    <meta name="hostname" content="github-fe119-cp1-prd.iad.github.net">
    <meta name="ruby" content="ruby 2.1.0p0-github-tcmalloc (87c9373a41) [x86_64-linux]">
    <link rel="assets" href="https://github.global.ssl.fastly.net/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035/">
    <link rel="xhr-socket" href="/_sockets" />


    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="7086AD2C:5644:470BCFA:530C5CB8" name="octolytics-dimension-request_id" /><meta content="3069152" name="octolytics-actor-id" /><meta content="irshadav" name="octolytics-actor-login" /><meta content="fc6932b2aa0063b0609b1b29aff73246f2a3e449eef0b61e5b039af7a66ce3ff" name="octolytics-actor-hash" />
    

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="d9MnZJgIJN5mWEDajAoBg4EWOHkRulKa+8a9SMLSuj8=" name="csrf-token" />

    <link href="https://github.global.ssl.fastly.net/assets/github-21e7a21cb81551e16b071e10038b3f5742d8639c.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://github.global.ssl.fastly.net/assets/github2-302c63ad2b8033fbc0df5784aea5068a2c3427fc.css" media="all" rel="stylesheet" type="text/css" />
    
    


      <script crossorigin="anonymous" src="https://github.global.ssl.fastly.net/assets/frameworks-01ab94ef47d6293597922a1fab60e274e1d8f37e.js" type="text/javascript"></script>
      <script async="async" crossorigin="anonymous" src="https://github.global.ssl.fastly.net/assets/github-c22e35d2cc7ad364705a24393d2329a8254e948e.js" type="text/javascript"></script>
      
      <meta http-equiv="x-pjax-version" content="d9eb92cb257d1c164caf5620bb2d1008">

      
  <meta name="description" content="scrollReveal.js - Declarative on-scroll reveal animations." />

  <meta content="2044842" name="octolytics-dimension-user_id" /><meta content="julianlloyd" name="octolytics-dimension-user_login" /><meta content="15975439" name="octolytics-dimension-repository_id" /><meta content="julianlloyd/scrollReveal.js" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="15975439" name="octolytics-dimension-repository_network_root_id" /><meta content="julianlloyd/scrollReveal.js" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/julianlloyd/scrollReveal.js/commits/master.atom" rel="alternate" title="Recent Commits to scrollReveal.js:master" type="application/atom+xml" />

  </head>


  <body class="logged_in  env-production windows vis-public tipsy-tooltips">
    <div class="wrapper">
      
      
      
      


      <div class="header header-logged-in true">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/">
  <span class="mega-octicon octicon-mark-github"></span>
</a>

    
    <a href="/notifications" aria-label="You have unread notifications" class="notification-indicator tooltipped tooltipped-s" data-gotokey="n">
        <span class="mail-status unread"></span>
</a>

      <div class="command-bar js-command-bar  in-repository">
          <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<input type="text" data-hotkey="/ s" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    data-username="irshadav"
      data-repo="julianlloyd/scrollReveal.js"
      data-branch="master"
      data-sha="b7f6f75fd2957ee4e11071b52345982c25d51fce"
  >

    <input type="hidden" name="nwo" value="julianlloyd/scrollReveal.js" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target" role="button" aria-haspopup="true">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container" aria-hidden="true">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="help tooltipped tooltipped-s" aria-label="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
        <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
            <li><a href="https://gist.github.com">Gist</a></li>
            <li><a href="/blog">Blog</a></li>
          <li><a href="https://help.github.com">Help</a></li>
        </ul>
      </div>

    


  <ul id="user-links">
    <li>
      <a href="/irshadav" class="name">
        <img alt="Irshad A" class=" js-avatar" data-user="3069152" height="20" src="https://2.gravatar.com/avatar/113ee55044858fa663f125539bd7162b?d=https%3A%2F%2Fidenticons.github.com%2Ffa576644923accaab99d1a89d7163e3c.png&amp;r=x&amp;s=140" width="20" /> irshadav
      </a>
    </li>

    <li class="new-menu dropdown-toggle js-menu-container">
      <a href="#" class="js-menu-target tooltipped tooltipped-s" aria-label="Create new...">
        <span class="octicon octicon-plus"></span>
        <span class="dropdown-arrow"></span>
      </a>

      <div class="new-menu-content js-menu-content">
      </div>
    </li>

    <li>
      <a href="/settings/profile" id="account_settings"
        class="tooltipped tooltipped-s"
        aria-label="Account settings ">
        <span class="octicon octicon-tools"></span>
      </a>
    </li>
    <li>
      <a class="tooltipped tooltipped-s" href="/logout" data-method="post" id="logout" aria-label="Sign out">
        <span class="octicon octicon-log-out"></span>
      </a>
    </li>

  </ul>

<div class="js-new-dropdown-contents hidden">
  

<ul class="dropdown-menu">
  <li>
    <a href="/new"><span class="octicon octicon-repo-create"></span> New repository</a>
  </li>
  <li>
    <a href="/organizations/new"><span class="octicon octicon-organization"></span> New organization</a>
  </li>


    <li class="section-title">
      <span title="julianlloyd/scrollReveal.js">This repository</span>
    </li>
      <li>
        <a href="/julianlloyd/scrollReveal.js/issues/new"><span class="octicon octicon-issue-opened"></span> New issue</a>
      </li>
</ul>

</div>


    
  </div>
</div>

      

        




          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        

<ul class="pagehead-actions">

    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="d9MnZJgIJN5mWEDajAoBg4EWOHkRulKa+8a9SMLSuj8=" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="15975439" />

    <div class="select-menu js-menu-container js-select-menu">
      <a class="social-count js-social-count" href="/julianlloyd/scrollReveal.js/watchers">
        117
      </a>
      <span class="minibutton select-menu-button with-count js-menu-target" role="button" tabindex="0" aria-haspopup="true">
        <span class="js-select-button">
          <span class="octicon octicon-eye-watch"></span>
          Watch
        </span>
      </span>

      <div class="select-menu-modal-holder">
        <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
          <div class="select-menu-header">
            <span class="select-menu-title">Notification status</span>
            <span class="octicon octicon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container" role="menu">

            <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">You only receive notifications for conversations in which you participate or are @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-watch"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">You receive notifications for all conversations in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-unwatch"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">You do not receive any notifications for conversations in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

  <li>
  

  <div class="js-toggler-container js-social-container starring-container ">
    <a href="/julianlloyd/scrollReveal.js/unstar"
      class="minibutton with-count js-toggler-target star-button starred"
      aria-label="Unstar this repository" data-remote="true" data-method="post" rel="nofollow">
      <span class="octicon octicon-star-delete"></span><span class="text">Unstar</span>
    </a>

    <a href="/julianlloyd/scrollReveal.js/star"
      class="minibutton with-count js-toggler-target star-button unstarred"
      aria-label="Star this repository" data-remote="true" data-method="post" rel="nofollow">
      <span class="octicon octicon-star"></span><span class="text">Star</span>
    </a>

      <a class="social-count js-social-count" href="/julianlloyd/scrollReveal.js/stargazers">
        2,451
      </a>
  </div>

  </li>


        <li>
          <a href="/julianlloyd/scrollReveal.js/fork" class="minibutton with-count js-toggler-target fork-button lighter tooltipped-n" title="Fork this repo" rel="nofollow" data-method="post">
            <span class="octicon octicon-git-branch-create"></span><span class="text">Fork</span>
          </a>
          <a href="/julianlloyd/scrollReveal.js/network" class="social-count">246</a>
        </li>


</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="repo-label"><span>public</span></span>
          <span class="mega-octicon octicon-repo"></span>
          <span class="author">
            <a href="/julianlloyd" class="url fn" itemprop="url" rel="author"><span itemprop="title">julianlloyd</span></a>
          </span>
          <span class="repohead-name-divider">/</span>
          <strong><a href="/julianlloyd/scrollReveal.js" class="js-current-repository js-repo-home-link">scrollReveal.js</a></strong>

          <span class="page-context-loader">
            <img alt="Octocat-spinner-32" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline js-new-discussion-timeline with-full-navigation ">
        <div class="repository-sidebar clearfix">
            

<div class="sunken-menu vertical-right repo-nav js-repo-nav js-repository-container-pjax js-octicon-loaders">
  <div class="sunken-menu-contents">
    <ul class="sunken-menu-group">
      <li class="tooltipped tooltipped-w" aria-label="Code">
        <a href="/julianlloyd/scrollReveal.js" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-gotokey="c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_tags repo_branches /julianlloyd/scrollReveal.js">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped tooltipped-w" aria-label="Issues">
          <a href="/julianlloyd/scrollReveal.js/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-gotokey="i" data-selected-links="repo_issues /julianlloyd/scrollReveal.js/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class='counter'>1</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped tooltipped-w" aria-label="Pull Requests">
        <a href="/julianlloyd/scrollReveal.js/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-gotokey="p" data-selected-links="repo_pulls /julianlloyd/scrollReveal.js/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>0</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


        <li class="tooltipped tooltipped-w" aria-label="Wiki">
          <a href="/julianlloyd/scrollReveal.js/wiki" aria-label="Wiki" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_wiki /julianlloyd/scrollReveal.js/wiki">
            <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>
    </ul>
    <div class="sunken-menu-separator"></div>
    <ul class="sunken-menu-group">

      <li class="tooltipped tooltipped-w" aria-label="Pulse">
        <a href="/julianlloyd/scrollReveal.js/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="pulse /julianlloyd/scrollReveal.js/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Graphs">
        <a href="/julianlloyd/scrollReveal.js/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_graphs repo_contributors /julianlloyd/scrollReveal.js/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Network">
        <a href="/julianlloyd/scrollReveal.js/network" aria-label="Network" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-selected-links="repo_network /julianlloyd/scrollReveal.js/network">
          <span class="octicon octicon-git-branch"></span> <span class="full-word">Network</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


  </div>
</div>

              <div class="only-with-full-nav">
                

  

<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/julianlloyd/scrollReveal.js.git" readonly="readonly">

    <span aria-label="copy to clipboard" class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/julianlloyd/scrollReveal.js.git" data-copied-hint="copied!"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><strong>SSH</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="git@github.com:julianlloyd/scrollReveal.js.git" readonly="readonly">

    <span aria-label="copy to clipboard" class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="git@github.com:julianlloyd/scrollReveal.js.git" data-copied-hint="copied!"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/julianlloyd/scrollReveal.js" readonly="readonly">

    <span aria-label="copy to clipboard" class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/julianlloyd/scrollReveal.js" data-copied-hint="copied!"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>,
      <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>,
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <span class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <a href="https://help.github.com/articles/which-remote-url-should-i-use">
    <span class="octicon octicon-question"></span>
    </a>
  </span>
</p>


  <a href="http://windows.github.com" class="minibutton sidebar-button">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>

                <a href="/julianlloyd/scrollReveal.js/archive/master.zip"
                   class="minibutton sidebar-button"
                   title="Download this repository as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          

<span id="js-show-full-navigation"></span>

<div class="repository-meta js-details-container ">
    <div class="repository-description js-details-show">
      <p>Declarative on-scroll reveal animations.</p>
    </div>

    <div class="repository-website js-details-show">
      <p><a href="http://julianlloyd.me/scrollreveal" rel="nofollow">http://julianlloyd.me/scrollreveal</a></p>
    </div>


</div>

<div class="capped-box overall-summary ">

  <div class="stats-switcher-viewport js-stats-switcher-viewport">

    <ul class="numbers-summary">
      <li class="commits">
        <a data-pjax href="/julianlloyd/scrollReveal.js/commits/master">
            <span class="num">
              <span class="octicon octicon-history"></span>
              47
            </span>
            commits
        </a>
      </li>
      <li>
        <a data-pjax href="/julianlloyd/scrollReveal.js/branches">
          <span class="num">
            <span class="octicon octicon-git-branch"></span>
            1
          </span>
          branch
        </a>
      </li>

      <li>
        <a data-pjax href="/julianlloyd/scrollReveal.js/releases">
          <span class="num">
            <span class="octicon octicon-tag"></span>
            2
          </span>
          releases
        </a>
      </li>

      <li>
        
  <a href="/julianlloyd/scrollReveal.js/graphs/contributors">
    <span class="num">
      <span class="octicon octicon-organization"></span>
      6
    </span>
    contributors
  </a>
      </li>
    </ul>

      <div class="repository-lang-stats">
        <ol class="repository-lang-stats-numbers">
          <li>
              <a href="/julianlloyd/scrollReveal.js/search?l=javascript">
                <span class="color-block language-color" style="background-color:#f15501;"></span>
                <span class="lang">JavaScript</span>
                <span class="percent">100%</span>
              </a>
          </li>
        </ol>
      </div>
  </div>

</div>

  <div class="tooltipped tooltipped-s" aria-label="Show language statistics">
    <a href="#"
     class="repository-lang-stats-graph js-toggle-lang-stats"
     style="background-color:#f15501">
  <span class="language-color" style="width:100%; background-color:#f15501;" itemprop="keywords">JavaScript</span>
    </a>
  </div>




<div class="file-navigation in-mid-page">
    <a href="/julianlloyd/scrollReveal.js/compare" aria-label="Compare, review, create a pull request" class="minibutton compact primary tooltipped tooltipped-s" aria-label="Compare &amp; review" data-pjax>
      <span class="octicon octicon-git-compare"></span>
    </a>

  

<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-remove-close js-menu-close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/julianlloyd/scrollReveal.js/tree/master"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/julianlloyd/scrollReveal.js/tree/v0.0.2"
                 data-name="v0.0.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v0.0.2">v0.0.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/julianlloyd/scrollReveal.js/tree/0.0.1"
                 data-name="0.0.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.0.1">0.0.1</a>
            </div> <!-- /.select-menu-item -->
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->


  <div class="breadcrumb"><span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/julianlloyd/scrollReveal.js" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">scrollReveal.js</span></a></span></span><span class="separator"> / </span><form action="/julianlloyd/scrollReveal.js/new/master" aria-label="Fork this project and create a new file" class="js-new-blob-form tooltipped tooltipped-e new-file-link" method="post"><span aria-label="Fork this project and create a new file" class="js-new-blob-submit octicon octicon-file-add" data-test-id="create-new-git-file" role="button"></span></form></div>
</div>



<a href="/julianlloyd/scrollReveal.js/find/master"
  data-hotkey="t" class="js-show-file-finder" style="display:none" data-pjax>Show File Finder</a>
<div class="bubble files-bubble">

  
  <div class="commit commit-tease js-details-container" >
    <p class="commit-title ">
        <a href="/julianlloyd/scrollReveal.js/commit/079144edb430a0c91ca005d527e2b9bec9aa5c75" class="message" data-pjax="true" title="Merge pull request #22 from tomByrer/patch-1

remove `-moz-` &amp; `-o-` from css transitions and transforms, and update comments section">Merge pull request</a> <a href="https://github.com/julianlloyd/scrollReveal.js/pull/22" class="issue-link" title="- `-moz-` &amp; `-o-` from css transitions &amp; transforms, top comment">#22</a> <a href="/julianlloyd/scrollReveal.js/commit/079144edb430a0c91ca005d527e2b9bec9aa5c75" class="message" data-pjax="true" title="Merge pull request #22 from tomByrer/patch-1

remove `-moz-` &amp; `-o-` from css transitions and transforms, and update comments section">from tomByrer/patch-1</a>
        <span class="hidden-text-expander inline"><a href="#" class="js-details-target">…</a></span>
    </p>
      <div class="commit-desc"><pre>remove `-moz-` &amp; `-o-` from css transitions and transforms, and update comments section</pre></div>
    <div class="commit-meta">
      <span aria-label="Copy SHA" class="js-zeroclipboard zeroclipboard-link" data-clipboard-text="079144edb430a0c91ca005d527e2b9bec9aa5c75" data-copied-hint="copied!"><span class="octicon octicon-clippy"></span></span>
      <a href="/julianlloyd/scrollReveal.js/commit/079144edb430a0c91ca005d527e2b9bec9aa5c75" class="sha-block" data-pjax>latest commit <span class="sha">079144edb4</span></a>

      <div class="authorship">
        <img alt="Julian Lloyd" class="gravatar js-avatar" data-user="2044842" height="20" src="https://0.gravatar.com/avatar/aed4fb020e0187df35e76c57e1c27630?d=https%3A%2F%2Fidenticons.github.com%2Ff7e09cdd44c15e03f09f19b5018230e2.png&amp;r=x&amp;s=140" width="20" />
        <span class="author-name"><a href="/julianlloyd" data-skip-pjax="true" rel="author">julianlloyd</a></span>
        authored <time class="js-relative-date updated" data-title-format="YYYY-MM-DD HH:mm:ss" datetime="2014-02-24T15:58:32-08:00" title="2014-02-24 15:58:32">February 24, 2014</time>

      </div>
    </div>
  </div>

  <table class="files" data-pjax>

    
<tbody class=""
  data-url="/julianlloyd/scrollReveal.js/file-list/master">
    <tr>
      <td class="icon">
        <span class="octicon octicon-file-text"></span>
        <img alt="Octocat-spinner-32" class="spinner" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
      </td>
      <td class="content">
        <span class="css-truncate css-truncate-target"><a href="/julianlloyd/scrollReveal.js/blob/master/.gitignore" class="js-directory-link" id="a084b794bc0759e7a6b77810e01874f2-ac39bdd54d94258ed1b6bace8fec5526805f5176" title=".gitignore">.gitignore</a></span>
      </td>
      <td class="message">
        <span class="css-truncate css-truncate-target"><a href="/julianlloyd/scrollReveal.js/commit/8926db335b2125fbe0b5493516f6ada87aaa2413" class="message" data-pjax="true" title="scrollReveal.js initial commit">scrollReveal.js initial commit</a></span>
      </td>
      <td class="age"><span class="css-truncate css-truncate-target"><time class="js-relative-date" data-title-format="YYYY-MM-DD HH:mm:ss" datetime="2014-01-16T10:02:14-08:00" title="2014-01-16 10:02:14">January 16, 2014</time></span></td>
    </tr>
    <tr>
      <td class="icon">
        <span class="octicon octicon-file-text"></span>
        <img alt="Octocat-spinner-32" class="spinner" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
      </td>
      <td class="content">
        <span class="css-truncate css-truncate-target"><a href="/julianlloyd/scrollReveal.js/blob/master/CHANGELOG.md" class="js-directory-link" id="4ac32a78649ca5bdd8e0ba38b7006a1e-896ee03fad1c5a2426160367560c56771369daac" title="CHANGELOG.md">CHANGELOG.md</a></span>
      </td>
      <td class="message">
        <span class="css-truncate css-truncate-target"><a href="/julianlloyd/scrollReveal.js/commit/8c32bc58c6230ed949a4b9404f11c647551cd8ef" class="message" data-pjax="true" title="v0.0.3">v0.0.3</a></span>
      </td>
      <td class="age"><span class="css-truncate css-truncate-target"><time class="js-relative-date" data-title-format="YYYY-MM-DD HH:mm:ss" datetime="2014-02-22T20:20:03-08:00" title="2014-02-22 20:20:03">February 22, 2014</time></span></td>
    </tr>
    <tr>
      <td class="icon">
        <span class="octicon octicon-file-text"></span>
        <img alt="Octocat-spinner-32" class="spinner" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
      </td>
      <td class="content">
        <span class="css-truncate css-truncate-target"><a href="/julianlloyd/scrollReveal.js/blob/master/LICENSE.md" class="js-directory-link" id="37854d19817c792316d481f5beb93cc7-92673a9fc94000bff1220552d0ac3ce090fa345f" title="LICENSE.md">LICENSE.md</a></span>
      </td>
      <td class="message">
        <span class="css-truncate css-truncate-target"><a href="/julianlloyd/scrollReveal.js/commit/6250b11e71e8c2c1c87ff14b2918a375b40b2d2d" class="message" data-pjax="true" title="add support for animation reset, easing and manual initialization">add support for animation reset, easing and manual initialization</a></span>
      </td>
      <td class="age"><span class="css-truncate css-truncate-target"><time class="js-relative-date" data-title-format="YYYY-MM-DD HH:mm:ss" datetime="2014-02-13T02:09:44-08:00" title="2014-02-13 02:09:44">February 13, 2014</time></span></td>
    </tr>
    <tr>
      <td class="icon">
        <span class="octicon octicon-file-text"></span>
        <img alt="Octocat-spinner-32" class="spinner" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
      </td>
      <td class="content">
        <span class="css-truncate css-truncate-target"><a href="/julianlloyd/scrollReveal.js/blob/master/README.md" class="js-directory-link" id="04c6e90faac2675aa89e2176d2eec7d8-a3fc6d490b21222d60978855d0ae87f925235c7a" title="README.md">README.md</a></span>
      </td>
      <td class="message">
        <span class="css-truncate css-truncate-target"><a href="/julianlloyd/scrollReveal.js/commit/0d942b1a0da5f5cbb34b2535495349a6b11095a8" class="message" data-pjax="true" title="Update README">Update README</a></span>
      </td>
      <td class="age"><span class="css-truncate css-truncate-target"><time class="js-relative-date" data-title-format="YYYY-MM-DD HH:mm:ss" datetime="2014-02-15T00:33:34-08:00" title="2014-02-15 00:33:34">February 15, 2014</time></span></td>
    </tr>
    <tr>
      <td class="icon">
        <span class="octicon octicon-file-text"></span>
        <img alt="Octocat-spinner-32" class="spinner" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
      </td>
      <td class="content">
        <span class="css-truncate css-truncate-target"><a href="/julianlloyd/scrollReveal.js/blob/master/bower.json" class="js-directory-link" id="0a08a7565aba4405282251491979bb6b-5d8595d65d67f2becda9fcc81c7167104e4c8eef" title="bower.json">bower.json</a></span>
      </td>
      <td class="message">
        <span class="css-truncate css-truncate-target"><a href="/julianlloyd/scrollReveal.js/commit/b0cf725007d662f3d94026b602e9a8cddbf06520" class="message" data-pjax="true" title="v0.0.3">v0.0.3</a></span>
      </td>
      <td class="age"><span class="css-truncate css-truncate-target"><time class="js-relative-date" data-title-format="YYYY-MM-DD HH:mm:ss" datetime="2014-02-22T20:13:50-08:00" title="2014-02-22 20:13:50">February 22, 2014</time></span></td>
    </tr>
    <tr>
      <td class="icon">
        <span class="octicon octicon-file-text"></span>
        <img alt="Octocat-spinner-32" class="spinner" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
      </td>
      <td class="content">
        <span class="css-truncate css-truncate-target"><a href="/julianlloyd/scrollReveal.js/blob/master/scrollReveal.js" class="js-directory-link" id="735fd0ef295c49b2a1aef79bb9da41c2-d34cf3d8f31dc342fd8d0757084dea727056b921" title="scrollReveal.js">scrollReveal.js</a></span>
      </td>
      <td class="message">
        <span class="css-truncate css-truncate-target"><a href="/julianlloyd/scrollReveal.js/commit/8fc593cb94d41da90bdd9e9d06e95d50c96cbf3a" class="message" data-pjax="true" title="+ top comment

Helpful for many JS minifiers to keep ID, version, author, &amp; copyright/licence">+ top comment</a></span>
      </td>
      <td class="age"><span class="css-truncate css-truncate-target"><time class="js-relative-date" data-title-format="YYYY-MM-DD HH:mm:ss" datetime="2014-02-22T20:12:32-08:00" title="2014-02-22 20:12:32">February 22, 2014</time></span></td>
    </tr>
</tbody>

  </table>
</div>

  <div id="readme" class="clearfix announce instapaper_body md">
    <span class="name">
      <span class="octicon octicon-book"></span>
      README.md
    </span>

    <article class="markdown-body entry-content" itemprop="mainContentOfPage"><h1>
<a name="scrollrevealjs" class="anchor" href="#scrollrevealjs"><span class="octicon octicon-link"></span></a>scrollReveal.js</h1>

<p>A simple way to create and maintain how elements fade in, triggered when they enter the viewport. An open-source experiment from <a href="https://twitter.com/julianlloyd">@JulianLloyd</a>.</p>

<p><a href="http://badge.fury.io/gh/julianlloyd%2FscrollReveal.js"><img src="https://github-camo.global.ssl.fastly.net/39aadb883c6e281976aee56d1e0226f0e12b5ea1/68747470733a2f2f62616467652e667572792e696f2f67682f6a756c69616e6c6c6f79642532467363726f6c6c52657665616c2e6a732e706e67" alt="scrollReveal version" data-canonical-src="https://badge.fury.io/gh/julianlloyd%2FscrollReveal.js.png" style="max-width:100%;"></a> <a href="https://bitdeli.com/free" title="Bitdeli Badge"><img src="https://github-camo.global.ssl.fastly.net/1b8a533185d0a24497b763af762ee730c84bd2b0/68747470733a2f2f64327765637a68766c38323376302e636c6f756466726f6e742e6e65742f6a756c69616e6c6c6f79642f7363726f6c6c72657665616c2e6a732f7472656e642e706e67" alt="Bitdeli Badge" data-canonical-src="https://d2weczhvl823v0.cloudfront.net/julianlloyd/scrollreveal.js/trend.png" style="max-width:100%;"></a></p>

<hr><h4>
<a name="-view-demo-" class="anchor" href="#-view-demo-"><span class="octicon octicon-link"></span></a><strong><a href="http://julianlloyd.me/scrollreveal">→ View Demo ←</a></strong>
</h4>

<hr><h2>
<a name="installation" class="anchor" href="#installation"><span class="octicon octicon-link"></span></a>Installation</h2>

<blockquote>
<p><strong>Disclaimer:</strong> scrollReveal.js is in early development, and breaking changes will likely occur in future updates. Before updating, please refer to the <a href="https://github.com/julianlloyd/scrollReveal.js/blob/master/CHANGELOG.md">CHANGELOG</a> for details.</p>
</blockquote>

<h4>
<a name="download" class="anchor" href="#download"><span class="octicon octicon-link"></span></a>Download</h4>

<p><a href="https://github.com/julianlloyd/scrollReveal.js/archive/master.zip">scrollReveal.js </a></p>

<h4>
<a name="github" class="anchor" href="#github"><span class="octicon octicon-link"></span></a>GitHub</h4>

<p><code>git clone https://github.com/julianlloyd/scrollReveal.js.git</code></p>

<h4>
<a name="bower" class="anchor" href="#bower"><span class="octicon octicon-link"></span></a>Bower</h4>

<p><code>bower install scrollReveal.js</code></p>

<hr><p>Once you have a copy of <code>scrollReveal.js</code>, place it in your JavaScript folder, and include the following JavaScript just before the closing <code>&lt;/body&gt;</code> tag.</p>

<div class="highlight highlight-html"><pre>  <span class="nt">&lt;script </span><span class="na">src=</span><span class="s">'{your_JavaScript_path}/scrollReveal.js'</span><span class="nt">&gt;&lt;/script&gt;</span>
  <span class="nt">&lt;script&gt;</span>

      <span class="nb">window</span><span class="p">.</span><span class="nx">scrollReveal</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">scrollReveal</span><span class="p">();</span>

  <span class="nt">&lt;/script&gt;</span>
</pre></div>

<h2>
<a name="basic-usage" class="anchor" href="#basic-usage"><span class="octicon octicon-link"></span></a>Basic Usage</h2>

<p>By adding a <code>data-scrollReveal</code> attribute to an element, it will automatically be revealed (using default values) as soon as the element is within the viewport:</p>

<div class="highlight highlight-html"><pre><span class="c">&lt;!-- Reveal using defaults. --&gt;</span>
<span class="nt">&lt;div</span> <span class="na">data-scrollReveal</span><span class="nt">&gt;</span> Hello world! <span class="nt">&lt;/div&gt;</span>
</pre></div>

<p><strong>But wait!</strong> It’s more fun if you define your own reveal animation parameters, which you can do using using natural, declarative language:</p>

<div class="highlight highlight-html"><pre><span class="c">&lt;!-- Reveal using custom parameters. --&gt;</span>
<span class="nt">&lt;div</span> <span class="na">data-scrollReveal=</span><span class="s">"enter left and move 50px over 1.33s"</span><span class="nt">&gt;</span> Foo <span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;div</span> <span class="na">data-scrollReveal=</span><span class="s">"enter from the bottom after 1s"</span><span class="nt">&gt;</span> Bar <span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;div</span> <span class="na">data-scrollReveal=</span><span class="s">"wait 2.5s and then ease-in-out 100px"</span><span class="nt">&gt;</span> Baz <span class="nt">&lt;/div&gt;</span>
</pre></div>

<h2>
<a name="getting-started" class="anchor" href="#getting-started"><span class="octicon octicon-link"></span></a>Getting Started</h2>

<p>What you enter into the <code>data-scrollReveal</code> attribute is parsed for specific words:</p>

<ul>
<li>
<strong>keywords</strong> that expect to be followed by a <strong>value</strong>.<br><br>
</li>
<li>
<strong>fillers</strong> as natural language sugar. (optional)</li>
</ul><h4>
<a name="keywords-and-values" class="anchor" href="#keywords-and-values"><span class="octicon octicon-link"></span></a>Keywords and Values</h4>

<p>These specific <strong>keyword</strong> / <strong>value</strong> pairs allow you to describe basic reveal animation behavior.</p>

<hr><p><strong>keyword:</strong> <code>enter</code> — Controls the vector origin of your reveal animation.<br><strong>value:</strong> <code>top</code> | <code>right</code> | <code>bottom</code> | <code>left</code><br><br><em>Example:</em></p>

<div class="highlight highlight-html"><pre><span class="c">&lt;!-- Reveal your element with a downward motion. --&gt;</span>
<span class="nt">&lt;div</span> <span class="na">data-scrollReveal=</span><span class="s">'enter top'</span><span class="nt">&gt;</span> Foo <span class="nt">&lt;/div&gt;</span>
</pre></div>

<hr><p><strong>keyword:</strong> <code>move</code> — The distance your revealing element travels.<br><strong>value:</strong> [ integer ]px.</p>

<p><em>Example:</em></p>

<div class="highlight highlight-html"><pre><span class="nt">&lt;div</span> <span class="na">data-scrollReveal=</span><span class="s">'move 24px'</span><span class="nt">&gt;</span> Bar <span class="nt">&lt;/div&gt;</span>
</pre></div>

<hr><p><strong>keyword:</strong> <code>over</code> — The duration of your reveal animation.<br><strong>value:</strong> [ decimal ]s</p>

<p><em>Example:</em></p>

<div class="highlight highlight-html"><pre><span class="nt">&lt;div</span> <span class="na">data-scrollReveal=</span><span class="s">'over 1.66s'</span><span class="nt">&gt;</span> Baz <span class="nt">&lt;/div&gt;</span>
</pre></div>

<hr><p><strong>keyword:</strong> <code>after/wait</code> — The duration before your reveal begins.<br><strong>value:</strong> [ decimal ]s</p>

<p><em>Example:</em></p>

<div class="highlight highlight-html"><pre><span class="c">&lt;!-- Both are accepted. --&gt;</span>
<span class="nt">&lt;div</span> <span class="na">data-scrollReveal=</span><span class="s">'after 0.33s'</span><span class="nt">&gt;</span> Mel <span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;div</span> <span class="na">data-scrollReveal=</span><span class="s">'wait 0.33s'</span><span class="nt">&gt;</span> Mel <span class="nt">&lt;/div&gt;</span>
</pre></div>

<h4>
<a name="combining-keywordvalue-pairs" class="anchor" href="#combining-keywordvalue-pairs"><span class="octicon octicon-link"></span></a>Combining Keyword/Value Pairs</h4>

<p>You can easily combine the above pairs to create more dynamic reveal animations.</p>

<p><em>Example:</em></p>

<div class="highlight highlight-html"><pre><span class="nt">&lt;div</span> <span class="na">data-scrollReveal=</span><span class="s">"enter top move 50px"</span><span class="nt">&gt;</span> Foo <span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;div</span> <span class="na">data-scrollReveal=</span><span class="s">"enter top move 50px, after 0.3s"</span><span class="nt">&gt;</span> Bar <span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;div</span> <span class="na">data-scrollReveal=</span><span class="s">"enter top move 50px, after 0.6s"</span><span class="nt">&gt;</span> Baz <span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;div</span> <span class="na">data-scrollReveal=</span><span class="s">"enter top move 50px, after 0.9s"</span><span class="nt">&gt;</span> Mel <span class="nt">&lt;/div&gt;</span>
</pre></div>

<h4>
<a name="fillers-optional" class="anchor" href="#fillers-optional"><span class="octicon octicon-link"></span></a>Fillers (optional)</h4>

<p>You can use conjoining filler words for more readable language.</p>

<ul>
<li><code>from</code></li>
<li><code>the</code></li>
<li><code>and</code></li>
<li><code>then</code></li>
<li><code>but</code></li>
<li><code>with</code></li>
<li><code>,</code></li>
</ul><p><em>Example</em>:</p>

<div class="highlight highlight-html"><pre><span class="c">&lt;!-- These 4 lines are equivalent. --&gt;</span>
<span class="nt">&lt;div</span> <span class="na">data-scrollReveal=</span><span class="s">"wait 0.3s, then enter left and move 40px over 2s"</span><span class="nt">&gt;</span> Foo <span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;div</span> <span class="na">data-scrollReveal=</span><span class="s">"enter from the left after 0.3s, move 40px, over 2s"</span><span class="nt">&gt;</span> Bar <span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;div</span> <span class="na">data-scrollReveal=</span><span class="s">"enter left move 40px over 2s after 0.3s"</span><span class="nt">&gt;</span> Baz <span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;div</span> <span class="na">data-scrollReveal=</span><span class="s">"enter left, move 40px, over 2s, wait 0.3s"</span><span class="nt">&gt;</span> Mel <span class="nt">&lt;/div&gt;</span>

</pre></div>

<h2>
<a name="advanced-usage" class="anchor" href="#advanced-usage"><span class="octicon octicon-link"></span></a>Advanced Usage</h2>

<h4>
<a name="custom-defaults" class="anchor" href="#custom-defaults"><span class="octicon octicon-link"></span></a>Custom defaults</h4>

<p>You can pass an object to the constructor with your desired default configuration.</p>

<div class="highlight highlight-html"><pre>  <span class="c">&lt;!-- Everything else. --&gt;</span>

  <span class="nt">&lt;script </span><span class="na">src=</span><span class="s">'{your_JavaScript_path}/scrollReveal.js'</span><span class="nt">&gt;&lt;/script&gt;</span>
  <span class="nt">&lt;script&gt;</span>

    <span class="c1">// The starting defaults.</span>
    <span class="kd">var</span> <span class="nx">config</span> <span class="o">=</span> <span class="p">{</span>
            <span class="nx">after</span><span class="o">:</span> <span class="s1">'0s'</span><span class="p">,</span>
            <span class="nx">enter</span><span class="o">:</span> <span class="s1">'bottom'</span><span class="p">,</span>
            <span class="nx">move</span><span class="o">:</span> <span class="s1">'24px'</span><span class="p">,</span>
            <span class="nx">over</span><span class="o">:</span> <span class="s1">'0.66s'</span><span class="p">,</span>
            <span class="nx">easing</span><span class="o">:</span> <span class="s1">'ease-in-out'</span><span class="p">,</span>
            <span class="nx">viewportFactor</span><span class="o">:</span> <span class="mf">0.33</span><span class="p">,</span>
            <span class="nx">reset</span><span class="o">:</span> <span class="kc">false</span><span class="p">,</span>
            <span class="nx">init</span><span class="o">:</span> <span class="kc">true</span>
          <span class="p">};</span>

    <span class="nb">window</span><span class="p">.</span><span class="nx">scrollReveal</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">scrollReveal</span><span class="p">(</span> <span class="nx">config</span> <span class="p">);</span>

  <span class="nt">&lt;/script&gt;</span>
<span class="nt">&lt;/body&gt;</span>
</pre></div>

<p>By default <code>init</code> is set to <code>true</code>, meaning <code>scrollReveal.init()</code> fires on instantiation. (This registers DOM elements and prepares them to reveal)<br><br>You may want to set <code>init</code> to <code>false</code> if you’re working with templates or other generated content, letting you control when <code>scrollReveal.init()</code> is first called.<br><br>You can also call this method any time afterwards to re-check all elements in the DOM for <code>data-scrollReveal</code> attributes.</p>

<h4>
<a name="generated-html" class="anchor" href="#generated-html"><span class="octicon octicon-link"></span></a>Generated HTML</h4>

<p>You may have dynamically generated HTML in your use case, (AJAX, templates, other JavaScript libraries, etc.,) so as mentioned above, the scrollReveal object has the <code>init()</code> helper method that checks for new elements in the DOM.</p>

<p><em>Example:</em></p>

<div class="highlight highlight-html"><pre>  <span class="c">&lt;!-- Everything else. --&gt;</span>

  <span class="nt">&lt;script </span><span class="na">src=</span><span class="s">'{your_JavaScript_path}/scrollReveal.js'</span><span class="nt">&gt;&lt;/script&gt;</span>
  <span class="nt">&lt;script&gt;</span>

      <span class="kd">var</span> <span class="nx">config</span> <span class="o">=</span> <span class="p">{</span>
              <span class="nx">enter</span><span class="o">:</span> <span class="s1">'bottom'</span><span class="p">,</span>
              <span class="nx">move</span><span class="o">:</span> <span class="s1">'40px'</span><span class="p">,</span>
              <span class="nx">over</span><span class="o">:</span> <span class="s1">'0.16s'</span><span class="p">,</span>
              <span class="nx">reset</span><span class="o">:</span> <span class="kc">true</span><span class="p">,</span>
              <span class="nx">init</span><span class="o">:</span> <span class="kc">false</span>
            <span class="p">};</span>

      <span class="nb">window</span><span class="p">.</span><span class="nx">scrollReveal</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">scrollReveal</span><span class="p">(</span> <span class="nx">config</span> <span class="p">);</span>

      <span class="c1">// Dummy AJAX return object:</span>
      <span class="kd">var</span> <span class="nx">data</span> <span class="o">=</span> <span class="p">{</span> <span class="nx">newElementHtml</span><span class="o">:</span> <span class="s1">'&lt;div data-scrollReveal&gt; Foo &lt;/div&gt;'</span> <span class="p">}</span>

      <span class="kd">var</span> <span class="nx">container</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">getElementById</span><span class="p">(</span><span class="s1">'#container'</span><span class="p">);</span>
          <span class="nx">container</span><span class="p">.</span><span class="nx">innerHTML</span><span class="p">(</span> <span class="nx">data</span><span class="p">.</span><span class="nx">newElementHTML</span> <span class="p">);</span>

     <span class="c1">// Now check for new elements in the DOM…</span>
     <span class="nx">scrollReveal</span><span class="p">.</span><span class="nx">init</span><span class="p">();</span>

  <span class="nt">&lt;/script&gt;</span>
<span class="nt">&lt;/body&gt;</span>
</pre></div>

<h4>
<a name="viewport-factor" class="anchor" href="#viewport-factor"><span class="octicon octicon-link"></span></a>Viewport Factor</h4>

<p>If set to <strong>0</strong>, the element is considered in the viewport as soon as it enters.<br>
If set to <strong>1</strong>, the element is considered in the viewport when it is fully visible.</p>

<p><em>Example:</em></p>

<div class="highlight highlight-javascript"><pre>    <span class="kd">var</span> <span class="nx">config</span> <span class="o">=</span> <span class="p">{</span>
      <span class="nx">viewportFactor</span><span class="o">:</span> <span class="mf">0.33</span>
    <span class="p">};</span>

    <span class="c1">// Your reveal animation triggers after 33% of</span>
    <span class="c1">// your element is visible within the viewport.</span>
</pre></div>

<h4>
<a name="replaying-animations" class="anchor" href="#replaying-animations"><span class="octicon octicon-link"></span></a>Replaying animations</h4>

<p><strong>Keyword:</strong> <code>reset</code> — replay reveal animations every time elements enter the viewport.</p>

<div class="highlight highlight-html"><pre><span class="c">&lt;!-- Note: The reset keyword works by itself. --&gt;</span>
<span class="nt">&lt;div</span> <span class="na">data-scrollReveal=</span><span class="s">"reset"</span><span class="nt">&gt;</span> Foo <span class="nt">&lt;/div&gt;</span>
</pre></div>

<blockquote>
<p><strong>Important Note:</strong> scrollReveal by defaut does not reset reveal animations, and will remove the appended <code>style</code> attribute (containing generated CSS) from your elements once the reveal animation is complete.<br><br>However when using <code>reset</code> (to prevent flickering in reveal animations), scrollReveal does not remove the appended <code>style</code> attribute.<br><br>This means using the <code>reset</code> keyword may cause the scrollReveal animation CSS properties to override or conflict with any other CSS transform and transition properties on that element.</p>
</blockquote>

<h4>
<a name="controlling-easing" class="anchor" href="#controlling-easing"><span class="octicon octicon-link"></span></a>Controlling Easing</h4>

<p>The <code>move</code> keyword can be replaced with any one of the following:</p>

<ul>
<li><code>ease</code></li>
<li><code>ease-in</code></li>
<li><code>ease-out</code></li>
<li><code>ease-in-out</code></li>
</ul><p><em>Example:</em></p>

<div class="highlight highlight-html"><pre><span class="nt">&lt;div</span> <span class="na">data-scrollReveal=</span><span class="s">"after 2s, ease-in 32px and reset over .66s"</span><span class="nt">&gt;</span> Foo <span class="nt">&lt;/div&gt;</span>
</pre></div>

<h2>
<a name="browser-support" class="anchor" href="#browser-support"><span class="octicon octicon-link"></span></a>Browser Support</h2>

<p>scrollReveal.js does not require jQuery, but does rely on <a href="http://caniuse.com/#search=transition">CSS3 transitions</a> to power its reveal animations; it has been developed exclusively for <strong>modern browser use only</strong>.</p>

<h2>
<a name="contributions" class="anchor" href="#contributions"><span class="octicon octicon-link"></span></a>Contributions</h2>

<p>Community feedback and involvement is highly encouraged.</p>

<hr><h4>
<a name="-open-issues-" class="anchor" href="#-open-issues-"><span class="octicon octicon-link"></span></a><a href="https://github.com/julianlloyd/scrollReveal.js/issues?state=open">→ Open Issues ←</a>
</h4>

<hr><h4>
<a name="special-thanks" class="anchor" href="#special-thanks"><span class="octicon octicon-link"></span></a>Special Thanks</h4>

<p>scrollReveal.js was inspired by the awesome <a href="http://tympanus.net/codrops/2013/07/18/on-scroll-effect-layout/">cbpScroller.js</a> by <a href="https://twitter.com/crnacura">Mary Lou</a>. Copyright © 2014 <a href="http://tympanus.net/codrops/">Codrops</a>.</p>

<h2>
<a name="license" class="anchor" href="#license"><span class="octicon octicon-link"></span></a>License</h2>

<p>The MIT License (MIT)</p>

<p>Copyright © 2014 <a href="https://twitter.com/julianlloyd">Julian Lloyd</a></p>

<p>Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:</p>

<p>The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.</p>

<p>THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</p></article>
  </div>


        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2014 <span title="0.06105s from github-fe119-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-remove-close close js-ajax-error-dismiss"></a>
      Something went wrong with that request. Please try again.
    </div>

      <div class="hidden" id="js-avatars" data-url="https://avatars.githubusercontent.com"></div>
  </body>
</html>

